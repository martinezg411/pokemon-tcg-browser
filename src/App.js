import './App.css';

// Components
import NavBar from './components/NavBar';
import CardList from './components/CardList';

function App() {
  return (
    <div className='text-white'>
      <NavBar />
      <CardList setID={'swsh4'} />
    </div>
  );
}

export default App;
