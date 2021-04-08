import { useState, useContext } from 'react';
import CardContext from '../context/card/cardContext';
import AlertContext from '../context/alert/alertContext';

const CardItem = ({ card, openModal }) => {
  const cardContext = useContext(CardContext);
  const { collection, addToCollection, removeFromCollection } = cardContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const inCollection = collection.includes(card.id);

  const [checked, setChecked] = useState(inCollection);
  const [favorited, setFavorited] = useState(false);

  const handleClick = () => {
    openModal(card);
  };

  const toggleCheck = () => {
    if (checked === false) {
      addToCollection(card.id);
      setAlert(
        `Added ${card.name} from ${card.set.name} to your collection.`,
        'success',
      );
    } else {
      removeFromCollection(card.id);
      setAlert(
        `Removed ${card.name} from ${card.set.name} from your collection.`,
        'failure',
      );
    }
    setChecked(!checked);
  };

  const toggleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <div className='cursor-pointer rounded-xl p-3 hover:bg-gray-900'>
      <div className='flex flex-row justify-between px-2 pb-1'>
        {favorited ? (
          <button className='focus:outline-none' onClick={toggleFavorite}>
            <i className='fas fa-heart text-red-400 fa-lg'></i>
          </button>
        ) : (
          <button className='focus:outline-none' onClick={toggleFavorite}>
            <i className='far fa-heart text-red-400 fa-lg'></i>
          </button>
        )}
        <h1 className='text-white text-sm'>{card.set.name}</h1>
        {checked === true ? (
          <button
            className='text-blue-200 text-xl focus:outline-none'
            onClick={toggleCheck}
          >
            <i className='fas fa-check-square'></i>
          </button>
        ) : (
          <button
            className='text-blue-200 text-xl focus:outline-none'
            onClick={toggleCheck}
          >
            <i className='fas fa-expand'></i>
          </button>
        )}
      </div>
      <div>
        <img
          src={card.images.small}
          className='mx-auto'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default CardItem;
