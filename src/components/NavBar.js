import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user/UserContext';

const NavBar = () => {
  const userContext = useContext(UserContext);
  const { isUserAuthenticated, logout } = userContext;
  const isAuthenticated = isUserAuthenticated();

  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleClick = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-2 border-b border-gray-700'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex flex-row flex-grow lg:flex-row justify-between lg:w-auto lg:static'>
          <Link
            className='text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
            to='/'
          >
            Card<strong className='text-blue-600'>Dex</strong>
          </Link>
          <div className='flex flex-row'>
            <Link to='/search'>
              <i className='fas fa-search text-white pt-2 mr-4 text-lg hover:text-blue-600'></i>
            </Link>
            <button
              className='text-white cursor-pointer text-2xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:text-blue-600'
              type='button'
              onClick={handleClick}
            >
              {navBarOpen ? (
                <i className='fas fa-times'></i>
              ) : (
                <i className='fas fa-bars'></i>
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:flex items-center ${navBarOpen ? 'flex' : 'hidden'}`}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:justify-end list-none lg:ml-auto`}
          >
            <li className='lg:py-1'>
              <Link
                to='/browse'
                className='px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
                href='/'
              >
                Browse
              </Link>
            </li>
            <li className='lg:py-1'>
              <Link
                to='/mycollection'
                className='px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
                href='/'
              >
                Collection
              </Link>
            </li>
            <li className='lg:py-1'>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className='px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
                >
                  Logout
                </button>
              ) : (
                <Link
                  to='/login'
                  className='px-3 pt-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-blue-600'
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
