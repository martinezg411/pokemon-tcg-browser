import { useReducer } from 'react';
import CardContext from './cardContext';
import CardReducer from './cardReducer';

const CardState = (props) => {
  const initialState = {
    collection: [],
    error: null,
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  // Adding all card data for now. Might change later.
  const addToCollection = (cardID) => {
    dispatch({ type: 'ADD_CARD', payload: cardID });
  };

  const removeFromCollection = (cardID) => {
    dispatch({ type: 'REMOVE_CARD', payload: cardID });
  };

  return (
    <CardContext.Provider
      value={{
        collection: state.collection,
        addToCollection,
        removeFromCollection,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
