import { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContext from './context/user/UserContext';

import Home from './pages/Home';
import SetBrowser from './pages/SetBrowser';
import Search from './pages/Search';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cards from './pages/Cards';
import MyCollection from './pages/MyCollection';

import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import Spinner from './components/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { checkAuthenticationOnMount } = userContext;

  useEffect(() => {
    checkAuthenticationOnMount().then(() => {
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner message={'Welcome'} />;
  } else {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/browse' component={SetBrowser} />
          <Route path='/search' component={Search} />
          <Route path='/cards' component={Cards} />
          <ProtectedRoute path='/mycollection' component={MyCollection} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
