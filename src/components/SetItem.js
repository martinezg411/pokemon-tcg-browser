const SetItem = ({ item, handleClick }) => {
  return (
    <div
      className='flex flex-col justify-between mx-auto hover:bg-gray-600 p-8 rounded-xl bg-black'
      onClick={() => {
        handleClick(item.id);
      }}
    >
      <div className='flex flex-row justify-start'>
        <img src={item.images.symbol} alt='' className='w-10 h-10 mr-4' />
        <div>
          <h2 className='text-xl font-bold '>{item.name}</h2>
          <h2>
            {' '}
            <span className='text-blue-400'>Release Date: </span>
            {item.releaseDate}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SetItem;
