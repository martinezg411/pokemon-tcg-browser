import { useState } from 'react';
import queryString from 'query-string';

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
    <form
      className='container mx-auto my-8 flex bg-black border-b-4 border-blue-600 h-20 items-center text-3xl mb-8'
      onSubmit={handleSumbit}
    >
      <button className='text-white pl-2 hover:text-blue-600'>
        {' '}
        <i className='fas fa-search'></i>
      </button>
      <input
        name='search'
        type='text'
        placeholder='Search for card'
        required
        value={text}
        className='ml-2 bg-black text-white font-bold flex-grow focus:outline-none rounded-xl px-2 text-md'
        onChange={handleChange}
      />
      <button
        onClick={clearText}
        type='button'
        className={`${
          text !== '' ? 'block' : 'hidden'
        } text-white hover:text-blue-600`}
      >
        <i className='fas fa-times pr-3'></i>
      </button>
    </form>
  );
};

export default Search;
