import { useState, useEffect, useContext } from 'react';
import CardList from './CardList';
import Spinner from './Spinner';
import Error from './Error';
import pokemon from 'pokemontcgsdk';
import queryString from 'query-string';

pokemon.configure({ apiKey: '908a25a7-ed9d-45d6-9b5e-f298f9ef3163' });

const CardViewer = ({ location }) => {
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = queryString.parse(location.search);
    pokemon.card
      .where({
        q: `name:${query.name}`,
        orderBy: '-set.releaseDate',
      })
      .then((result) => {
        setCards(result.data);
      })
      .catch((err) => {
        setError(err);
      });

    setIsLoaded(true);
    //eslint-disable-next-line
  }, []);

  if (error) {
    return <Error name={error.name} message={error.message} />;
  } else if (!isLoaded) {
    return <Spinner />;
  } else {
    return <CardList cards={cards} />;
  }
};

export default CardViewer;
