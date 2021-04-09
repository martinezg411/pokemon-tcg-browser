import { useState } from 'react';
import queryString from 'query-string';
import SearchFilters from './SearchFilters';

const Search = ({ history }) => {
  const [text, setText] = useState('');

  const clearText = () => {
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const query = {
      name: text,
    };
    const stringified = queryString.stringify(query);
    const path = `/cards?${stringified}`;
    history.push(path);
  };

  return (
    <div className='container mx-auto mt-4'>
      <form
        className='flex bg-gray-900 border-b-4 border-blue-400 h-20 items-center text-3xl mb-8'
        onSubmit={handleSumbit}
      >
        <button className='text-white pl-2'>
          {' '}
          <i className='fas fa-search'></i>
        </button>
        <input
          name='search'
          type='text'
          placeholder='Search for card'
          value={text}
          className='ml-2 bg-gray-900 text-white font-bold flex-grow focus:outline-none rounded-xl px-2 text-md'
          onChange={handleChange}
        />
        <button
          onClick={clearText}
          type='button'
          className={`${
            text !== '' ? 'block' : 'hidden'
          } text-white hover:text-blue-400`}
        >
          <i className='fas fa-times pr-3'></i>
        </button>
      </form>
      <SearchFilters />
    </div>
  );
};

export default Search;
