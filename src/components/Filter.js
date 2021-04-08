import { useState } from 'react';

const Filter = ({ name, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className='container rounded-lg mb-2 h-16 bg-gray-800 flex flex-row justify-between items-center px-4 text-xl hover:cursor-wait'
        onClick={toggle}
      >
        <h1>{name} </h1>
        {isActive ? (
          <i className='fas fa-chevron-up'></i>
        ) : (
          <i className='fas fa-chevron-down'></i>
        )}
      </div>
      <div
        className={` ${
          isActive ? 'grid' : 'hidden'
        } grid-cols-3 justify-items-center py-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Filter;
