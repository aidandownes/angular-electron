import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Stopwatch} from '../models/stopwatch.model';

import * as fromStopwatch from '../reducers/stopwatch.reducer';

export const selectStopWatchState = createFeatureSelector<fromStopwatch.State>(
    fromStopwatch.stopwatchFeatureKey);

export const selectStopWatch =
    createSelector(selectStopWatchState, state => ({
                                           title: state.title,
                                           duration: state.duration,
                                           ended: state.ended,
                                           running: state.running
                                         }));
