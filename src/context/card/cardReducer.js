export default (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        collection: [action.payload, ...state.collection],
      };

    case 'REMOVE_CARD':
      return {
        ...state,
        collection: state.collection.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};
