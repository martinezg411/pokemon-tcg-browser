import { useContext, useState, useEffect, useRef } from 'react';
import UserContext from '../context/user/UserContext';
import data from '../constants/data';
import SetProgressItem from '../components/SetProgressItem';
import Spinner from '../components/Spinner';
import IconEmpty from '../assets/icon-empty.svg';

const MyCollection = () => {
  const userContext = useContext(UserContext);
  const { collection } = userContext;
  const [collectionSets, setCollectionSets] = useState([]);
  const [filteredSets, setFilteredSets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const text = useRef('');

  // Check user collection to find all sets that have at least one card.
  useEffect(() => {
    const items = [];
    for (let key of Object.getOwnPropertyNames(collection)) {
      const setData = data[key];
      items.push({
        id: key,
        ...setData,
        cards: collection[key],
      });
    }

    items.sort((item1, item2) => {
      const splitItem1 = item1.releaseDate.split('/');
      const splitItem2 = item2.releaseDate.split('/');
      const date1 = new Date(
        parseInt(splitItem1[0]),
        parseInt(splitItem1[1]) - 1,
        parseInt(splitItem1[2]),
      );
      const date2 = new Date(
        parseInt(splitItem2[0]),
        parseInt(splitItem2[1]) - 1,
        parseInt(splitItem2[2]),
      );
      return date2 - date1;
    });

    setCollectionSets(items);
    setFilteredSets(items);
    setIsLoading(false);
  }, [collection]);

  const filterSets = (str) => {
    setFilteredSets(
      collectionSets.filter((set) => {
        const regex = new RegExp(`${str}`, 'gi');
        return set.name.match(regex);
      }),
    );
  };

  const onFilterTextChange = (e) => {
    if (text.current.value !== '') {
      filterSets(e.target.value);
    } else {
      setFilteredSets([...collectionSets]);
    }
  };

  if (isLoading) {
    return <Spinner message='Retrieving your collection.' />;
  } else {
    return (
      <div className='container mx-auto my-8 px-2 flex flex-col'>
        {collectionSets.length === 0 ? (
          <h1 className='text-white text-center font-bold'>
            Your collection is empty. Add cards and your progress for the
            appropriate set will be displayed here.
          </h1>
        ) : (
          <div>
            <div className='flex flex-row mb-6'>
              <input
                ref={text}
                type='text'
                name='collection-search'
                placeholder='Find a set...'
                autoComplete='off'
                className='text-lg text-white flex-grow mr-4 bg-black outline-none border-2 border-gray-800 px-4 py-2 focus:border-blue-600 rounded-md'
                onChange={onFilterTextChange}
              />
              <div className='cursor-pointer p-2 flex flex-row justify-evenly items-center text-white border-2 border-gray-800 hover:border-blue-600 px-6 py-2 rounded-md'>
                <span className='text-md mr-3'>Sort By</span>
                <i className='fas fa-chevron-down'></i>
              </div>
            </div>
            <div>
              {filteredSets.length !== 0 ? (
                filteredSets.map((set) => (
                  <SetProgressItem key={set.id} information={set} />
                ))
              ) : (
                <div className='flex flex-col justify-center align-middle mt-16 text-center'>
                  <img src={IconEmpty} className='h-80 mb-10' />
                  <h1 className='text-white text-2xl font-bold'>
                    Uh Oh! No results found searching for{' '}
                    <span className='text-blue-600'>{`'${text.current.value}'`}</span>
                    .
                  </h1>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default MyCollection;
