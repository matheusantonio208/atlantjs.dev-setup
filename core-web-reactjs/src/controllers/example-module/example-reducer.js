import produce from 'immer';

export default function example_module(state= [], action) {
  
  switch (action.type) {
    
    case '@example/ACT_ION': {
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