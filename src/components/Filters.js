import React from 'react';

const Filters = ({ display, setListStyle }) => {
  const setListDisplay = () => {
    setListStyle('list');
  };

  const setTileDisplay = () => {
    setListStyle('tile');
  };
  return (
    <div className='container mx-auto px-4 text-white text-2xl pb-4 flex justify-end'>
      <div>
        <button
          className={`${
            display === 'tile' ? 'text-gray-600' : 'text-white'
          } mr-2 outline-none border-none`}
          onClick={setTileDisplay}
        >
          <i className='fas fa-th-large'></i>
        </button>
        <button
          className={`${
            display === 'list' ? 'text-gray-600' : 'text-white'
          } outline-none`}
          onClick={setListDisplay}
        >
          <i className='fas fa-list'></i>
        </button>
      </div>
    </div>
  );
};

export default Filters;
