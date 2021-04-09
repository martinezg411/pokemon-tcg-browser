import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import SetBrowser from './components/SetBrowser';
import Search from './components/Search';
import CardViewer from './components/CardViewer';

// Context
import CardState from './context/card/CardState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <CardState>
      <AlertState>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/browse' component={SetBrowser} />
            <Route path='/search' component={Search}></Route>
            <Route path='/cards' component={CardViewer}></Route>
            <Route path='/mycollection'>hi</Route>
          </Switch>
        </Router>
      </AlertState>
    </CardState>
  );
}

export default App;
