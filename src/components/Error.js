import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../images/errorImage.png';

const Error = ({ message }) => {
  return (
    <div className='container mx-auto flex flex-col items-center mt-8'>
      <h1 className='text-white text-bold text-4xl mb-2'>
        Something went wrong!
      </h1>
      <p className='text-blue-300 text-xl mb-4'>{message}</p>
      <img src={errorImage} alt='Pokemon in distress' className='h-56' />
      <div className='text-white mt-8'>
        <Link
          to='/search'
          className='text-white bg-blue-600 p-4 rounded-lg focus:outline-none hover:bg-blue-700'
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default Error;
