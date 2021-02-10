import React, { useState } from 'react';

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleClick = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 border-b-2'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
            href='/'
          >
            Card<strong className='text-blue-400'>Dex</strong>
          </a>
          <button
            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:opacity-75'
            type='button'
            onClick={handleClick}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            navBarOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li>
              <a
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                href='/'
              >
                Search
              </a>
            </li>
            <li>
              <a
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                href='/'
              >
                Trade
              </a>
            </li>
            <li>
              <a
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                href='/'
              >
                My Collection
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
