import {createAction, props} from '@ngrx/store';

export const initialize = createAction(
    '[Stopwatch initialize]', props<{duration: string, title: string}>())

export const start = createAction('[Stopwatch] start');

export const pause = createAction('[Stopwatch] pause');

export const tick =
    createAction('[Stopwatch] tick', props<{remainingDuration: string}>());

export const end = createAction('[Stopwatch end');