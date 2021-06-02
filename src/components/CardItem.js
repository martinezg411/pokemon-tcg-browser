import { useContext, useState } from 'react';
import UserContext from '../context/user/UserContext';
import Skeleton from 'react-loading-skeleton';

const CardItem = ({ card, alert, expand }) => {
  const userContext = useContext(UserContext);
  const { isUserAuthenticated, isCardInCollection, add, remove } = userContext;
  const [isLoading, setIsLoading] = useState(false);
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const toggleCheck = () => {
    setIsLoading(true);

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
    setIsLoading(false);
  };

  return (
    <div>
      <div
        className='relative cursor-pointer transition duration-150 transform hover:scale-105 '
        onMouseEnter={() => setIsMouseOnCard(true)}
        onMouseLeave={() => setIsMouseOnCard(false)}
      >
        {/* isUserAuthenticated() && btn */}
        <div
          className={`${
            isMouseOnCard ? 'opacity-100' : 'opacity-0'
          } transition opacity duration-150 `}
        >
          <div className='text-white absolute top-0 left-0 h-full w-full z-20 flex flex-col justify-start p-2'>
            <span className='font-bold text-lg text-blue-600 mb-2'>
              {isCardInCollection(card)
                ? 'This card is in your collection.'
                : 'This card is not in your collection'}
            </span>
            <span className='text-sm mb-1'>
              <span className='text-sm text-blue-600'>Series: </span>
              {card.set.series}
            </span>
            <span className='text-sm mb-1'>
              <span className='text-sm text-blue-600'>Set: </span>{' '}
              {card.set.name}
            </span>
            <span className='mb-2'>
              <span className='text-sm text-blue-600'>Name: </span> {card.name}
            </span>
            <button
              className='bg-blue-700 hover:bg-blue-800 rounded-md py-1 mb-2'
              onClick={toggleCheck}
            >
              {isCardInCollection(card) ? (
                <span>
                  {isLoading ? (
                    <i className='animate-spin fas fa-spinner mr-2'></i>
                  ) : (
                    <i className='fas fa-trash mr-2'></i>
                  )}
                  Remove
                </span>
              ) : (
                <span>
                  {isLoading ? (
                    <i className='animate-spin fas fa-spinner mr-2'></i>
                  ) : (
                    <i className='fas fa-plus mr-2'></i>
                  )}
                  Add
                </span>
              )}
            </button>
            <button className='bg-blue-700 hover:bg-blue-800 rounded-md py-1'>
              <i className='fas fa-info-circle'></i> More Info
            </button>
          </div>
          <div
            className={`absolute rounded-lg bg-gradient-to-b ${
              isCardInCollection(card)
                ? 'from-black to-blue-900 z-10'
                : 'from-black to-gray-700 z-10'
            } top-0 left-0 h-full w-full backdrop-filter backdrop-blur-sm opacity-80`}
          ></div>
        </div>
        <img
          src={card.images.small}
          className={`mx-auto ${
            isCardInCollection(card)
              ? 'card-item-clicked'
              : 'card-item-no-click'
          }`}
        />
      </div>
    </div>
  );
};

CardItem.defaultProps = {
  card: null,
};

export default CardItem;
