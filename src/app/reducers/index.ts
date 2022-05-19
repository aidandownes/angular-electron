import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {APP_CONFIG} from '../../environments/environment';
import * as fromSession from './session.reducer';
import * as fromStopwatch from './stopwatch.reducer';


export interface State {
  [fromSession.sessionsFeatureKey]: fromSession.State;
  [fromStopwatch.stopwatchFeatureKey]: fromStopwatch.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSession.sessionsFeatureKey]: fromSession.reducer,
  [fromStopwatch.stopwatchFeatureKey]: fromStopwatch.reducer,
};

export const metaReducers: MetaReducer<State>[] =
    !APP_CONFIG.production ? [] : [];
