import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StopwatchEffects } from './stopwatch.effects';

describe('StopwatchEffects', () => {
  let actions$: Observable<any>;
  let effects: StopwatchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StopwatchEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StopwatchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
