import { useState } from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ label, open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className='container rounded-lg mb-2 h-16 bg-gray-800 flex flex-row justify-between items-center px-8 text-xl hover:cursor-wait'
        onClick={toggle}
      >
        <h1>{label} </h1>
        {isOpen ? (
          <i className='fas fa-chevron-up'></i>
        ) : (
          <i className='fas fa-chevron-down'></i>
        )}
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>{children}</div>
    </div>
  );
};

DropdownItem.defaultProps = {
  label: 'Click me to reveal content',
  open: false,
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  open: PropTypes.bool,
};

export default DropdownItem;
