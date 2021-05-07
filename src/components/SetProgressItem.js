import { useHistory } from 'react-router-dom';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const SetProgressItem = ({ information }) => {
  const history = useHistory();
  const { id, name, total, releaseDate, cards, series, symbol } = information;
  const percentage = Math.ceil((cards.length / total) * 100);

  const handleClick = (filter) => {
    history.push(`/cards?set=${id}`, { filter });
  };

  return (
    <div className='bg-gray-900 rounded-xl mb-6'>
      {/* Collection Info */}
      <div className='text-white mx-auto  p-6 rounded-xl mb-4'>
        <div className='flex flex-col sm:flex-row items-baseline sm:justify-between mb-2'>
          <div className='flex flex-col sm:flex-row sm:justify-evenly items-baseline text-xl sm:text-2xl text-white'>
            <span className='mb-1 sm:mb-0'>
              <img src={symbol} className='inline-block h-6 w-6 mr-2' />
              <span> {name} </span>
            </span>
            <span className='text-sm sm:ml-2 text-blue-500 '>
              Series: {series}
            </span>
          </div>
          <span className='text-blue-400 sm:ml-4'>
            Released: <span className='text-white'>{releaseDate}</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className='relative pt-1'>
          <div className='flex mb-2 items-center justify-between'>
            <div>
              <span className='text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200'>
                {cards.length} / {total} cards
              </span>
            </div>
            <div className='text-right'>
              <span className='text-sm font-semibold inline-block text-blue-600'>
                {percentage}%
              </span>
            </div>
          </div>
          <div className='overflow-hidden h-2 mb-4 text-xs flex rounded-xl bg-blue-200'>
            <div
              style={{ width: `${percentage}%` }}
              className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600'
            ></div>
          </div>
        </div>
        {/* Buttons */}
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='w-full sm:w-auto flex flex-col sm:flex-row'>
            <button
              className='w-full mb-2 sm:mb-0 bg-green-500 h-12 sm:w-40 rounded mr-2 hover:bg-green-600 focus:outline-none'
              onClick={() => handleClick('CIC')}
            >
              Cards In Collection
            </button>
            <button
              className='w-full mb-2 sm:mb-0 bg-red-600 h-12 sm:w-40 rounded hover:bg-red-700 focus:outline-none'
              onClick={() => handleClick('NIC')}
            >
              Missing Cards
            </button>
          </div>
          <div>
            <FacebookShareButton
              className='mr-2'
              url='http://www.google.com'
              quote={`I have ${cards.length} cards out of ${total} from ${name}.`}
            >
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton
              url='http://www.google.com'
              title={`I have ${cards.length} cards out of ${total} from ${name}.`}
            >
              <TwitterIcon size={40} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetProgressItem;
