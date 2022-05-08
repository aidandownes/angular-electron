import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Session } from './session.model';

export const loadSessions = createAction(
  '[Session/API] Load Sessions', 
  props<{ sessions: Session[] }>()
);

export const addSession = createAction(
  '[Session/API] Add Session',
  props<{ session: Session }>()
);

export const upsertSession = createAction(
  '[Session/API] Upsert Session',
  props<{ session: Session }>()
);

export const addSessions = createAction(
  '[Session/API] Add Sessions',
  props<{ sessions: Session[] }>()
);

export const upsertSessions = createAction(
  '[Session/API] Upsert Sessions',
  props<{ sessions: Session[] }>()
);

export const updateSession = createAction(
  '[Session/API] Update Session',
  props<{ session: Update<Session> }>()
);

export const updateSessions = createAction(
  '[Session/API] Update Sessions',
  props<{ sessions: Update<Session>[] }>()
);

export const deleteSession = createAction(
  '[Session/API] Delete Session',
  props<{ id: string }>()
);

export const deleteSessions = createAction(
  '[Session/API] Delete Sessions',
  props<{ ids: string[] }>()
);

export const clearSessions = createAction(
  '[Session/API] Clear Sessions'
);
