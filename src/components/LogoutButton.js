import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/user/UserContext';

const LogoutButton = () => {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const { logout } = userContext;

  const handleClick = () => {
    logout().then(() => history.push('/'));
  };

  return (
    <button
      className='bg-blue-600 text-white text-bold px-2 py-1 text-sm rounded hover:bg-blue-800 focus:outline-none w-16'
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
