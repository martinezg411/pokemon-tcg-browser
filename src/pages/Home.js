const Home = ({ history }) => {
  const handleClick = () => {
    history.push('/search');
  };

  return (
    <div className='relative h-screen bg-black border-b-8 border-gray-700 bg-card-image bg-center'>
      <div className='absolute top-0 left-0 w-full h-full z-1 bg-black bg-opacity-40 shadow-inner'></div>
      <div className='h-80 flex flex-col justify-center items-center text-white'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 text-xl flex flex-col justify-center items-center text-center'>
        <h1 className='text-xl sm:text-6xl font-bold mb-1'>Collect them all</h1>
        <p className='text-xs sm:text-md mb-4'>
          Explore Pokemon trading cards and keep track of your collection.
        </p>
        <button
          className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md focus:outline-none text-sm'
          onClick={handleClick}
        >
          Search for cards
        </button>
      </div>
    </div>
  );
};

export default Home;
