import Carousel from '../components/Carousel';

const Home = ({ history }) => {
  const handleClick = (page) => {
    history.push(`/${page}`);
  };

  return (
    <div className='h-auto lg:h-screen py-4 border-b-8 border-gray-700 home mt-4 lg:mt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center lg:flex-row lg:justify-evenly px-4 pb-4'>
          <div className='text-white flex flex-col justify-center w-full lg:w-1/2 pb-4'>
            <h1 className='text-4xl sm:text-6xl font-bold mb-2'>
              Collect 'em all
            </h1>
            <p className='text-xs sm:text-lg mb-4 opacity-75'>
              You have bad memory. Let us help you keep track of which cards you
              currently own. That is, if you can find any.
            </p>
            <div className='w-full flex flex-col lg:flex-row gap-4 mt-2'>
              <button
                className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md focus:outline-none text-md w-full'
                onClick={() => handleClick('search')}
              >
                Search for cards
              </button>
              <button
                className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md focus:outline-none text-md w-full'
                onClick={() => handleClick('login')}
              >
                Login
              </button>
            </div>
          </div>
          <div className='w-full lg:w-1/3'>
            <Carousel />
          </div>
        </div>
        {/* Features Overview */}
        <div className='flex flex-col lg:flex-row justify-evenly gap-8 mb-16'>
          <div className='w-full text-white text-center mb-2 lg:mb-0'>
            <i className='fas fa-search fa-3x mb-2'></i>
            <h1 className='text-xl font-bold mb-2'>Search for cards</h1>
            <p className='opacity-75'>
              Search for your favorite cards. You can search by Pokemon or you
              can browse by set.
            </p>
          </div>
          <div className='w-full text-white text-center mb-2 lg:mb-0'>
            <i className='fas fa-tasks fa-3x mb-2 mx-auto'></i>
            <h1 className='text-xl font-bold mb-2'>
              Add cards to your collection
            </h1>
            <p className='opacity-75'>
              Add any card to your collection by clicking the checkbox on the
              top right corner of a card. You must be logged into an account to
              access this feature.
            </p>
          </div>
          <div className='w-full text-white text-center mb-2 lg:mb-0'>
            <div className='flex flex-row justify-center gap-4 mb-2  '>
              <i className='fas fa-mobile fa-3x'></i>
              <i className='fas fa-desktop fa-3x'></i>
            </div>
            <h1 className='text-xl font-bold mb-2'>Access Anywhere</h1>
            <p className='opacity-75'>
              Easily access your collection from anywhere. All you need is an
              internet connection and login credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
