const SetItem = ({ item, handleClick }) => {
  return (
    <div
      className='hover:bg-gray-800 p-8 rounded-xl bg-gray-900 cursor-pointer'
      onClick={() => {
        handleClick(item.id);
      }}
    >
      <div className='flex flex-row justify-center'>
        <img src={item.symbol} alt='' className='w-8 h-8 mr-4' />
        <div>
          <h2 className='text-md font-bold '>{item.name}</h2>
          <h2 className='text-xs'>
            {' '}
            <span className='text-blue-400 text-xs'>Release Date: </span>
            {item.releaseDate}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SetItem;
