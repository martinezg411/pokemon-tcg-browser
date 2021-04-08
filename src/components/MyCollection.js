import { useContext } from 'react';
import CardList from './CardList';

// Context for state.collection
import CardContext from '../context/card/cardContext';

const MyCollection = () => {
  const cardContext = useContext(CardContext);
  const { collection } = cardContext;
  return <CardList cards={collection} />;
};

export default MyCollection;
