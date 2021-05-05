import { useContext } from 'react';
import UserContext from '../context/user/UserContext';

const CardItem = ({ card, alert, expand }) => {
  const userContext = useContext(UserContext);
  const { isUserAuthenticated, isCardInCollection, add, remove } = userContext;

  const handleClick = () => {
    expand(card);
  };

  const toggleCheck = () => {
    if (!isUserAuthenticated()) {
      alert({
        type: 'failure',
        message: 'Please login to your account to modify your collection.',
      });
      return;
    }

    if (isCardInCollection(card)) {
      remove(card).then((result) => {
        alert(result);
      });
    } else {
      add(card).then((result) => {
        alert(result);
      });
    }
  };

  const btn = (
    <div className={'absolute -top-2 -right-2 rounded-md bg-black p-2'}>
      {isCardInCollection(card) ? (
        <button
          className='text-blue-500 hover:text-blue-600 focus:outline-none'
          onClick={toggleCheck}
        >
          <i className='fas fa-check-square fa-lg'></i>
        </button>
      ) : (
        <button
          className='text-blue-500 hover:text-blue-600 text-xl focus:outline-none'
          onClick={toggleCheck}
        >
          <i className='fas fa-expand fa-lg'></i>
        </button>
      )}
    </div>
  );

  return (
    <div>
      <div className='relative'>
        {isUserAuthenticated() && btn}
        <img
          src={card.images.small}
          className={`mx-auto ${
            isCardInCollection(card)
              ? 'border-8 border-blue-600 rounded-2xl'
              : 'border-0'
          }`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

CardItem.defaultProps = {
  card: null,
};

export default CardItem;
