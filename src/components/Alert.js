import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div
      className={`${
        type === 'success' ? 'bg-green-400' : 'bg-red-500'
      } p-4 text-md text-white w-1/2 shadow-lg rounded-xl text-center fixed left-1/2 top-5 transform -translate-x-2/4`}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default Alert;
