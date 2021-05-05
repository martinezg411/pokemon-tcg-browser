import spinner from '../images/spinner.gif';

const Spinner = ({ message }) => {
  return (
    <div className='mt-40'>
      <img
        src={spinner}
        alt='Loading...'
        className='h-20 w-20 mx-auto rounded-xl'
      />
      <h1 className='text-white text-center mt-4 text-xl'>{message}</h1>
    </div>
  );
};

export default Spinner;
