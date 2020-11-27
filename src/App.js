import logo from './logo.svg';
import './App.css';
import FavColor from './components/FavColor';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div className="container mt-5">
      {/* <FavColor /> */}
      {/* <FavColor favColor="yellow" /> */}
      {/* <Home /> */}
      <Router>
        <div className="card">
          <div className="card-header">
            <NavLink className="btn btn-primary btn-sm" to="/" exact>Home</NavLink>&nbsp;&nbsp;
        <NavLink className="btn btn-primary btn-sm" to="/add-emp">Add</NavLink>
          </div>
          <div className="card-body">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/add-emp" component={Add} />
              <Route path="/edit-emp/:id" component={Edit} />
            </Switch>
          </div>
        </div>


      </Router>
    </div>
  );
}

export default App;
