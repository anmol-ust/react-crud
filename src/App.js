import logo from './logo.svg';
import './App.css';
import FavColor from './components/FavColor';

const App = () => {
  return (
    <div className="App">
      {/* <FavColor /> */}
      <FavColor favColor="yellow" />
    </div>
  );
}

export default App;
