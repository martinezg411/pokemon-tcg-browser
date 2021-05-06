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
    <div className='container mx-auto mt-8'>
      <form
        className='mx-2 sm:mx-0 px-2 pt-2 pb-4 flex flex-row text-2xl sm:text-3xl border-blue-600 border-b-2 '
        onSubmit={handleSumbit}
      >
        <button className='text-white hover:text-blue-600 pr-2'>
          <i className='fas fa-search'></i>
        </button>
        <input
          name='search'
          type='text'
          placeholder='Search for card'
          required
          value={text}
          className='bg-black text-white flex-grow font-bold focus:outline-none text-md'
          onChange={handleChange}
        />
        <button
          onClick={clearText}
          type='button'
          className={`${
            text !== '' ? 'block' : 'hidden'
          } text-white hover:text-blue-600 pl-2 `}
        >
          <i className='fas fa-times'></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
