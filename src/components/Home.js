import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      <div className='h-80 flex flex-col justify-center items-center text-white'>
        <h1 className='text-3xl text-bold mb-2'>Collect them all!</h1>
        <h2 className='text-xl mb-4'>Track you progress</h2>
        <div>
          <button className='bg-blue-400 h-10 mr-2 p-2 rounded-lg focus:outline-none hover:bg-blue-600'>
            <Link to='/search'>Start your search</Link>
          </button>
          <button className='bg-blue-400 h-10 p-2 rounded-lg focus:outline-none hover:bg-blue-600'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
