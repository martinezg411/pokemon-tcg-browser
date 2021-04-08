import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const NavBar = ({ getCardsByName }) => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleClick = (name) => {
    if (name === 'menu') {
      setNavBarOpen(!navBarOpen);
    } else {
      setSearchOpen(!searchOpen);
    }
  };

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 border-b border-blue-400'>
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
            onClick={() => {
              handleClick('menu');
            }}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            navBarOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className='flex flex-col lg:flex-row lg:justify-end list-none w-full lg:ml-auto'>
            <li className='block lg:list-item mb-2 lg:mb-0 lg:mr-2'>
              <Link to='/search'>
                <i className='fas fa-search text-white pt-1 text-lg hover:text-blue-400'></i>
              </Link>
            </li>
            <li className='lg:py-1'>
              <Link
                to='/browse'
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-400'
                href='/'
              >
                Browse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
