import React, { useEffect, useState } from 'react';
import GridLayout from './GridLayout';
import CardItem from './CardItem';
import PropTypes from 'prop-types';

import axios from 'axios';

const CardList = ({ setID }) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 15; // May or may not be converted to state to allow user to change items on page
  const maxPages = Math.floor(cards.length / pageSize);

  const getCardList = async (id) => {
    try {
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=set.id:${setID}`,
      );
      setCards(response.data.data);
    } catch (error) {
      setCards([]);
      console.log(error);
    }
  };

  const pageForward = () => {
    const maxPages = Math.floor(cards.length / pageSize);
    if (page !== maxPages) {
      setPage(page + 1);
    }
  };

  const pageBack = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const getCardsToDisplay = (page, numItems) => {
    let result = [];
    const start = page * numItems;
    const end = Math.min(start + numItems, cards.length);
    let i = start;
    for (; i < end; ++i) {
      result.push(<CardItem card={cards[i]} key={i} />);
    }

    return result;
  };

  useEffect(() => {
    getCardList(setID);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <GridLayout>{getCardsToDisplay(page, pageSize)}</GridLayout>
      {/* Page Controls */}
      <div className='flex justify-center my-6'>
        <button
          className='bg-blue-400 h-10 w-20 rounded-lg cursor-pointer hover:bg-blue-600 mr-2 disabled:opacity-50 disabled:bg-blue-400'
          onClick={pageBack}
          disabled={page === 0 ? true : false}
        >
          Previous
        </button>
        <button
          className='bg-blue-400 h-10 w-20 rounded-lg cursor-pointer hover:bg-blue-600 ml-2 disabled:opacity-50 disabled:bg-blue-400'
          onClick={pageForward}
          disabled={page === maxPages ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// CardList.propTypes = {
//   name: PropTypes.string.isRequired,
//   items: PropTypes.array.isRequired,
// };

export default CardList;
