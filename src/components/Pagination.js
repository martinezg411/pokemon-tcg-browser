import React from 'react';

const Pagination = ({ cardsPerPage, totalCards, currentPage, changePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <ul className='text-white flex flex-row flex-wrap justify-center mt-8'>
      {pageNumbers.map((pageNum) => (
        <li key={pageNum}>
          <button
            className={`${
              currentPage === pageNum ? 'bg-blue-800' : 'bg-blue-600'
            }  w-10 h-10 m-1 rounded-full hover:bg-blue-800 focus:outline-none`}
            onClick={() => {
              changePage(pageNum);
            }}
          >
            {pageNum}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
