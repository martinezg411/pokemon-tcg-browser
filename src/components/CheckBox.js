import { useState } from 'react';

const CheckBox = ({ description }) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <button
      className='flex justify-between items-center w-72 text-bold bg-black hover:bg-gray-800 focus:outline-none bg-opacity-50 rounded-2xl px-4 py-2 mb-1 text-blue-600'
      onClick={toggle}
    >
      <h1 className='text-white'>{description}</h1>
      {checked ? (
        <i className='fas fa-circle'></i>
      ) : (
        <i className='far fa-circle'></i>
      )}
    </button>
  );
};

export default CheckBox;
