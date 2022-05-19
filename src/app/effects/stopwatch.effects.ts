import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Duration} from 'luxon';
import {EMPTY, interval} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

import * as StopwatchActions from '../actions/stopwatch.actions';
import * as StopwatchSelectors from '../selectors/stopwatch.selectors';


@Injectable()
export class StopwatchEffects {
  tick$ = createEffect(
      () => this.actions$.pipe(
          ofType(
              StopwatchActions.start, StopwatchActions.pause,
              StopwatchActions.end),
          withLatestFrom(
              this.store.select(StopwatchSelectors.selectStopWatchState)),
          switchMap(([_, state]) => {
            if (state.running) {
              const duration = Duration.fromISO(state.duration);
              return interval(state.speed).pipe(map(number => {
                const timePassed = (number + 1) * state.speed;
                const remainingDuration = duration.minus(timePassed);

                return remainingDuration.toMillis() > 0 ?
                    StopwatchActions.tick(
                        {remainingDuration: remainingDuration.toISO()}) :
                    StopwatchActions.end();
              }))
            } else {
              return EMPTY;
            }
          })));



  constructor(private actions$: Actions, private store: Store) {}
}
