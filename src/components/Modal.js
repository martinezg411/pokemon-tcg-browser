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
      className='fixed z-20 top-0 left-0 bg-black h-screen w-screen bg-opacity-90 text-center'
      onClick={handleClick}
    >
      <button
        className='text-white text-2xl font-bold absolute top-3 left-3 hover:text-blue-400'
        onClick={close}
      >
        <i className='fas fa-times'></i>
      </button>
      <div
        ref={contentRef}
        className='h-full w-full text-white overflow-scroll flex flex-col lg:flex-row'
      >
        <img
          src={card.images.large}
          alt='Pokemon Card'
          className='h-auto w-full sm:h-full
           sm:w-auto py-4 '
        />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            provident maxime non delectus qui temporibus illo fuga perferendis
            dolores vero quidem, debitis, voluptate cumque consequuntur corporis
            praesentium accusantium facere quae.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            provident maxime non delectus qui temporibus illo fuga perferendis
            dolores vero quidem, debitis, voluptate cumque consequuntur corporis
            praesentium accusantium facere quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
