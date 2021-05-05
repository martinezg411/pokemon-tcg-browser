import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import UserContext from '../context/user/UserContext';

const NavBar = () => {
  const userContext = useContext(UserContext);
  const { isUserAuthenticated } = userContext;
  const isAuthenticated = isUserAuthenticated();

  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleClick = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-2 border-b border-gray-700'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            className='text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
            to='/'
          >
            Card<strong className='text-blue-400'>Dex</strong>
          </Link>
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
          <ul className='flex flex-col lg:flex-row lg:justify-end list-none w-full lg:ml-auto'>
            <li className='block lg:list-item mb-2 lg:mb-0 lg:mr-2'>
              <Link to='/search'>
                <i className='fas fa-search text-white pt-1 text-lg hover:text-blue-600'></i>
              </Link>
            </li>
            <li className='lg:py-1'>
              <Link
                to='/browse'
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
                href='/'
              >
                Browse
              </Link>
            </li>
            <li className='lg:py-1'>
              <Link
                to='/mycollection'
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
                href='/'
              >
                Collection
              </Link>
            </li>
            <li className='lg: py-1 pl-2'>
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <Link
                  to='/login'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
