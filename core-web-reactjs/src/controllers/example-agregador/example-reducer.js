import produce from 'immer';

export default function example_module(state= [], action) {
  
  switch (action.type) {
    
    case '@example/ACTION_SUCCESS': {
      return produce(state, (draft) => {
        const { data } = action;
        draft.push(data);
      });
    }

    default: {
      return state;
    }
  }
}