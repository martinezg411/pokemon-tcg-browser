import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../context/user/UserContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isUserAuthenticated } = useContext(UserContext);
  const isAuthenticated = isUserAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

export default ProtectedRoute;
