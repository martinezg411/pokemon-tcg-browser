const Alert = ({ type, message, removeAlert }) => {
  return (
    <div
      className={`${
        type === 'success' ? 'bg-green-600' : 'bg-red-500'
      } container flex flex-row justify-between p-4 mx-auto text-white rounded font-bold fixed bottom-5 z-10 bg-opacity-95`}
    >
      <span>{message}</span>
      <i
        className='fas fa-times text-xl hover:text-gray-300'
        onClick={removeAlert}
      ></i>
    </div>
  );
};

export default Alert;
