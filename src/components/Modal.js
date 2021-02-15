import { Fragment, useRef } from 'react';

const Modal = ({ children, close }) => {
  const contentRef = useRef(null);

  const handleClick = (event) => {
    if (contentRef !== null && !contentRef.current.contains(event.target)) {
      close();
    }
  };

  return (
    <div
      className='fixed z-10 top-0 left-0 bg-black h-screen w-screen bg-opacity-90 text-center p-8'
      onClick={handleClick}
    >
      <button
        className='text-white text-2xl font-bold absolute top-3 left-3 hover:text-blue-400'
        onClick={close}
      >
        X
      </button>
      <div ref={contentRef} className='inline-block min-w-sm sm:h-full'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
