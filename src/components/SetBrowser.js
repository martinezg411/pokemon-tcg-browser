import { useState, useEffect } from 'react';
import SetItem from './SetItem';
import queryString from 'query-string';
import pokemon from 'pokemontcgsdk';

pokemon.configure({ apiKey: '908a25a7-ed9d-45d6-9b5e-f298f9ef3163' });

const SetBrowser = ({ history }) => {
  const [sets, setSets] = useState([]);

  const getPokemonSets = async (setName) => {
    try {
      const res = await pokemon.set.all({ orderBy: '-releaseDate' });
      setSets(res);
    } catch (error) {
      console.error(error.msg);
      setSets([]);
    }
  };

  useEffect(() => {
    getPokemonSets('Sword & Shield');
    //eslint-disble-next-line
  }, []);

  const handleClick = (setID) => {
    const query = {
      set: setID,
    };
    const stringified = queryString.stringify(query);
    const path = `/cards?${stringified}`;
    history.push(path);
  };

  return (
    <div className='container mx-auto text-white my-8 grid lg:grid-cols-4 gap-4'>
      {sets.map((item) => (
        <SetItem key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default SetBrowser;
