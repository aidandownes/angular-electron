import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {APP_CONFIG} from '../../environments/environment';
import * as fromSession from '../session.reducer';


export interface State {
  [fromSession.sessionsFeatureKey]: fromSession.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSession.sessionsFeatureKey]: fromSession.reducer,
};

export const metaReducers: MetaReducer<State>[] =
    !APP_CONFIG.production ? [] : [];

export const selectSessionState =
    createFeatureSelector<fromSession.State>(fromSession.sessionsFeatureKey);

export const selectSessions =
    createSelector(selectSessionState, fromSession.selectAll);

export const selectSessionsMap =
    createSelector(selectSessionState, fromSession.selectEntities);

export const selectSessionIds =
    createSelector(selectSessionState, fromSession.selectIds);
