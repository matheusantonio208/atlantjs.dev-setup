import produce from 'immer';

const INITIAL_STATE = {
  fieldA: null,
};

export default function entityName(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@entity/ACTION_NAME': {
        
        break;
      }

      default:
    }
  });
}
