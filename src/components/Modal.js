import React from 'react';

const Modal = ({ children, close }) => {
  return (
    <div className='fixed z-10 top-0 left-0 bg-black h-screen w-screen bg-opacity-90'>
      <button
        className='text-white text-2xl font-bold absolute top-3 left-3 hover:text-blue-400'
        onClick={close}
      >
        X
      </button>
      <div className='h-full w-3/6  mx-auto rounded-2xl shadow-xl py-4'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
