import * as fromStopwatch from './stopwatch.actions';

describe('actions', () => {
  it('should return an action', () => {
    expect(fromStopwatch.initialize({duration: 'PT25M', title: 'break'}).type)
        .toBe('[Stopwatch] initialize');
  });
});
