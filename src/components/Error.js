import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import togepi from './sadTogepi.png';

const Error = ({ name, message }) => {
  return (
    <div className='container mx-auto flex flex-col items-center'>
      <h1 className='text-white text-bold text-4xl mb-2'>
        Something went wrong!
      </h1>
      <p className='text-blue-300 text-xl mb-4'>
        {name}: {message}
      </p>
      <img src={togepi} alt='Pokemon in distress' className='h-56' />
      <div className='text-white mt-8'>
        <Link
          to='/search'
          className='text-white bg-blue-400 p-4 rounded-lg focus:outline-none hover:bg-blue-600'
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default Error;
