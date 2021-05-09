import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../context/user/UserContext';

import CardItem from '../components/CardItem';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import Pagination from '../components/Pagination';

import queryString from 'query-string';
import pokemon from '../config/pokemon';

const Cards = () => {
  const { isCardInCollection, isUserAuthenticated } = useContext(UserContext);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [cards, setCards] = useState([]);
  const [modalCard, setModalCard] = useState(null);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState(
    location.state !== undefined ? location.state.filter : 'ALL',
  );

  const FILTERS = {
    ALL: () => true,
    CIC: (card) => isCardInCollection(card),
    NIC: (card) => !isCardInCollection(card),
  };

  const fetch = async () => {
    // Build the query in format acceptable by sdk
    const query = queryString.parse(location.search);
    let queries = '';

    if (query.name !== undefined) {
      queries += `name:"${query.name}"`;
    }

    if (query.set !== undefined) {
      queries += `set.id:${query.set}`;
    }

    try {
      const result = await pokemon.card.where({
        q: queries,
        orderBy: '-set.releaseDate',
      });
      setCards(result.data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoaded(true);
  };

  useEffect(() => {
    fetch();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const filtered = cards.filter(FILTERS[filter]);
    setFilteredCards(filtered);
  }, [filter, cards]);

  // Get posts for current page
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const cardsOnPage = filteredCards.slice(indexOfFirstPost, indexOfLastPost);
  const changePage = (pageNum) => setCurrentPage(pageNum);

  if (!isLoaded) {
    return <Spinner message='Fetching Data' />;
  } else if (error) {
    return <Error message={error} />;
  } else if (cards.length === 0) {
    return <Error message={'No results were found.'} />;
  } else {
    return (
      <div className='container mx-auto mt-4 mb-28'>
        {modalCard && (
          <Modal card={modalCard} close={() => setModalCard(null)} />
        )}
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            removeAlert={() => {
              setAlert(null);
            }}
          />
        )}
        <div className='flex flex-col lg:flex-row justify-between items-center px-2 mb-4'>
          <h1 className='text-white text-3xl py-6 font-bold'>
            {filteredCards.length} Cards Retrieved
          </h1>

          {/* Filters available only when user is logged in */}
          {isUserAuthenticated() && (
            <div className='flex flex-col md:flex-row'>
              <button
                className={`text-white border-2 border-blue-600 px-4 py-2 rounded-full focus:outline-none ml-2 hover:bg-blue-700 mb-2 lg:mb-0 ${
                  filter === 'ALL' ? 'bg-blue-600' : 'bg-black'
                }`}
                onClick={() => {
                  setFilter('ALL');
                }}
              >
                Show All
              </button>
              <button
                className={`text-white border-2 border-blue-600 px-4 py-2 rounded-full focus:outline-none ml-2 hover:bg-blue-700 mb-2 lg:mb-0 ${
                  filter === 'CIC' ? 'bg-blue-600' : 'bg-black'
                }`}
                onClick={() => setFilter('CIC')}
              >
                Show Cards In Your Collection
              </button>
              <button
                className={`text-white border-2 border-blue-600 px-4 py-2 rounded-full focus:outline-none ml-2 hover:bg-blue-700 mb-2 lg:mb-0 ${
                  filter === 'NIC' ? 'bg-blue-600' : 'bg-black'
                }`}
                onClick={() => {
                  setFilter('NIC');
                }}
              >
                Show Cards Not In Your Collection
              </button>
            </div>
          )}
        </div>

        {/* Retrieved Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2  px-2'>
          {cardsOnPage.map((card) => {
            return (
              <CardItem
                key={card.id}
                card={card}
                alert={setAlert}
                expand={setModalCard}
              />
            );
          })}
        </div>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={filteredCards.length}
          currentPage={currentPage}
          changePage={changePage}
        />
      </div>
    );
  }
};

export default Cards;
