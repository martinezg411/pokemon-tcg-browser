export default (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      if (state !== null) {
        clearTimeout(state.timerID);
      }
      return action.payload;

    case 'REMOVE_ALERT':
      return null;

    default:
      return state;
  }
};
