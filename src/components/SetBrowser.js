import { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk';

const expansions = ['Sword & Shield', 'Sun & Moon'];

pokemon.configure({ apiKey: '908a25a7-ed9d-45d6-9b5e-f298f9ef3163' });

const SetDisplay = ({ name, items }) => {
  const [cardSets, setCardSets] = useState([]);

  useEffect(() => {
    const arr = items.filter((item) => item.series === name);
    setCardSets(arr);
  }, [items]);

  return (
    <div className='container mx-auto text-white mt-8 h-16 '>
      <h1 className='text-3xl px-8'>{name}</h1>
      <div className='grid lg:grid-cols-4'>
        {cardSets.map((item) => (
          <div
            key={item.id}
            className='flex flex-col h-72 justify-between mx-auto my-4 hover:bg-gray-600 p-8 rounded-xl'
          >
            <img src={item.images.logo} alt='' className='' />
            <div className='flex flex-row justify-start'>
              <img src={item.images.symbol} alt='' className='w-10 h-10 mr-4' />
              <div>
                <h2>{item.name}</h2>
                <h2>
                  {' '}
                  <span className='text-blue-400'>Release Date: </span>
                  {item.releaseDate}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SetBrowser = () => {
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

  return (
    <div>
      <SetDisplay name={'Sword & Shield'} items={sets} />
    </div>
  );
};

export default SetBrowser;
