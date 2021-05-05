import { useRef } from 'react';

const Modal = ({ card, close }) => {
  const contentRef = useRef(null);

  const handleClick = (event) => {
    if (contentRef !== null && !contentRef.current.contains(event.target)) {
      close();
    }
  };

  return (
    <div
      className='fixed z-20 top-0 left-0 bg-black h-screen w-screen bg-opacity-90 text-center p-8'
      onClick={handleClick}
    >
      <button
        className='text-white text-2xl font-bold absolute top-3 left-3 hover:text-blue-400'
        onClick={close}
      >
        <i className='fas fa-times'></i>
      </button>
      <div ref={contentRef} className='inline-block min-w-sm sm:h-full '>
        <img src={card.images.large} alt='Pokemon Card' className='h-full' />
      </div>
    </div>
  );
};

export default Modal;
