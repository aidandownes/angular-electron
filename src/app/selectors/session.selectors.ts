import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromSession from '../reducers/session.reducer';

export const selectSessionState =
    createFeatureSelector<fromSession.State>(fromSession.sessionsFeatureKey);

export const selectSessions =
    createSelector(selectSessionState, fromSession.selectAll);

export const selectSessionsMap =
    createSelector(selectSessionState, fromSession.selectEntities);

export const selectSessionIds =
    createSelector(selectSessionState, fromSession.selectIds);
