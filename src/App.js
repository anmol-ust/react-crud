import logo from './logo.svg';
import './App.css';
import FavColor from './components/FavColor';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      {/* <FavColor /> */}
      {/* <FavColor favColor="yellow" /> */}
      <Home />
    </div>
  );
}

export default App;
