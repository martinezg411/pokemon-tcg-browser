import React from 'react';

const GridLayout = ({ children }) => {
  return (
    <div className='container px-2 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      {children}
    </div>
  );
};

export default GridLayout;
