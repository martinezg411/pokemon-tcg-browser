import { Fragment } from 'react';
import spinner from './giphy.gif';

const Spinner = () => {
  return (
    <div className='mt-40'>
      <img
        src={spinner}
        alt='Loading...'
        className='h-20 w-20 mx-auto rounded-xl'
      />
    </div>
  );
};

export default Spinner;
