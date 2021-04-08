import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Modal from './Modal';
import Alert from './Alert';

import AlertContext from '../context/alert/alertContext';

const CardList = ({ cards }) => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  const pageSize = 8;
  const [showModal, setShowModal] = useState(false);
  const [modalCard, setModalCard] = useState(null);
  const [page, setPage] = useState(0);

  const closeModal = () => {
    setShowModal(false);
    setModalCard(null);
  };

  const openModal = (card) => {
    setModalCard(card);
    setShowModal(true);
  };

  const changePage = (newPage) => {
    const maxPages = Math.ceil(cards.length / pageSize);
    if (newPage >= 0 && newPage < maxPages) {
      setPage(newPage);
    }
  };

  const getCardsInPage = (page) => {
    let result = [];
    const start = page * pageSize;
    const end = Math.min(start + pageSize, cards.length);
    let i = start;
    for (; i < end; ++i) {
      result.push(
        <CardItem key={cards[i].id} card={cards[i]} openModal={openModal} />,
      );
    }
    return result;
  };

  return (
    <div>
      {showModal && (
        <Modal close={closeModal}>
          <img
            src={modalCard.images.large}
            alt='Pokemon Card'
            className='sm:h-full mx-auto'
          />
        </Modal>
      )}

      {alert !== null && <Alert message={alert.message} type={alert.type} />}

      <div className='container flex mx-auto justify-center items-center mt-4'>
        <button
          className='text-white text-2xl text-bold h-12 w-12 bg-black rounded-full hover:bg-gray-600 focus:outline-none disabled:opacity-25 disabled:bg-gray-600 '
          disabled={page === 0}
          onClick={() => {
            changePage(page - 1);
          }}
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <div className='grid grid-cols-4  mx-auto'>{getCardsInPage(page)}</div>
        <button
          className='text-white text-2xl text-bold h-12 w-12 bg-black rounded-full hover:bg-gray-600 focus:outline-none disabled:opacity-25 disabled:bg-gray-600'
          disabled={page >= Math.ceil(cards.length / pageSize) - 1}
          onClick={() => {
            changePage(page + 1);
          }}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
