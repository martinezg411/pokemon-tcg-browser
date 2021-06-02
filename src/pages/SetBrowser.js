import SetItem from '../components/SetItem';
import data from '../constants/data';
import queryString from 'query-string';
import { useRef, useState } from 'react';

let sets = [];

for (let key of Object.getOwnPropertyNames(data)) {
  const set = data[key];
  sets.push({
    id: key,
    name: set.name,
    symbol: set.symbol,
    releaseDate: set.releaseDate,
  });
}

sets = sets.reverse();

const SetBrowser = ({ history }) => {
  const [filteredSets, setFilteredSets] = useState([...sets]);
  const text = useRef('');
  const handleClick = (setID) => {
    const query = {
      set: setID,
    };
    const stringified = queryString.stringify(query);
    const path = `/cards?${stringified}`;
    history.push(path);
  };

  const filterSets = (str) => {
    setFilteredSets(
      sets.filter((set) => {
        const regex = new RegExp(`${str}`, 'gi');
        return set.name.match(regex);
      }),
    );
  };

  const onFilterTextChange = (e) => {
    if (text.current.value !== '') {
      filterSets(e.target.value);
    } else {
      setFilteredSets([...sets]);
    }
  };

  return (
    <div className='container mx-auto px-2 sm:px-0 my-8 '>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-white'>
        {filteredSets.map((item) => (
          <SetItem key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default SetBrowser;
