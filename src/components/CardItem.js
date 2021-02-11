import { Fragment } from 'react';

const CardItem = ({ card, openModal }) => {
  const handleClick = () => {
    openModal(card);
  };

  return (
    <>
      <img
        src={card.images.small}
        className='mx-auto transform hover:scale-105 cursor-pointer border-opacity-0 hover:border-opacity-100 border-4 border-blue-400 rounded-2xl'
        onClick={handleClick}
      />
    </>
  );
};

export default CardItem;
