import produce from 'immer';

const INITIAL_STATE = {
  valueA: null,
  valueB: false,
  valueC: true,
};

export default function example_module(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@example/ACTION_SUCCESS': {
        const { data } = action;
        draft.push(data);
        break;
      }

      default:
    }
  });
}
