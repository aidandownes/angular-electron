import {Action, createReducer, on} from '@ngrx/store';

import * as StopwatchActions from '../actions/stopwatch.actions';


export const stopwatchFeatureKey = 'stopwatch';

export interface State {
  title?: string;
  duration?: string;

  running: boolean;
  ended: boolean;
  speed: number;
}

export const initialState: State = {
  running: false,
  ended: false,
  speed: 1000,
};

export const reducer = createReducer(
    initialState,
    on(StopwatchActions.initialize, (_state, {title, duration}) => ({
                                      ...initialState,
                                      title,
                                      duration,
                                    })),

    on(StopwatchActions.start,
       (state) => {
         return !state.running && !state.ended ? {...state, running: true} :
                                                 state;
       }),

    on(StopwatchActions.tick,
       (state, {remainingDuration}) => {
         return state.running && !state.ended ?
             {...state, duration: remainingDuration} :
             state;
       }),


    on(StopwatchActions.pause,
       (state) => {
         return state.running && !state.ended ? {...state, running: false} :
                                                state;
       }),

    on(StopwatchActions.end, (state) => {
      return state.running && !state.ended ?
          {...state, running: false, ended: true, duration: 'PT0M'} :
          state;
    }));
