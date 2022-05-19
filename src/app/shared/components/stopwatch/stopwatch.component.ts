import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as StopwatchActions from '../../../actions/stopwatch.actions';
import * as StopwatchSelectors from '../../../selectors/stopwatch.selectors';


@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StopwatchComponent implements OnInit {
  @Input() title: string;
  @Input() duration: string;

  stopwatch$ = this.store.select(StopwatchSelectors.selectStopWatch);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(StopwatchActions.initialize(
        {title: this.title, duration: this.duration}));
  }

  pause(): void {
    this.store.dispatch(StopwatchActions.pause());
  }

  start(): void {
    this.store.dispatch(StopwatchActions.start());
  }
}
