import reducer, { INITIAL_STATE } from '#behaviors/example-agregador/example-reducer.js';
import * as ExampleActions from '#behaviors/example-agregador/example-actions';

describe('ExampleActions reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('ACTION_REQUEST', () => {
    const state = reducer(INITIAL_STATE, ExampleActions.actionRequest('data'));

    expect(state).toStrictEqual(['data']);
  });
});