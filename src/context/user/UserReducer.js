export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
        collection: {},
      };

    case 'LOGOUT':
      return {
        user: null,
        collection: {},
      };

    case 'SET_COLLECTION': {
      return {
        ...state,
        collection: action.payload,
      };
    }

    case 'ADD_TO_COLLECTION': {
      let cards = null;
      if (state.collection[action.payload.set] === undefined) {
        cards = [action.payload.card];
      } else {
        cards = [...state.collection[action.payload.set], action.payload.card];
      }

      return {
        ...state,
        collection: {
          ...state.collection,
          [action.payload.set]: [...cards],
        },
      };
    }

    case 'REMOVE_FROM_COLLECTION': {
      const cards = state.collection[action.payload.set];
      const index = cards.indexOf(action.payload.card);
      cards.splice(index, 1);
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.payload.set]: [...cards],
        },
      };
    }

    default:
      return state;
  }
};
