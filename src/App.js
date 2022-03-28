import logo from './logo.svg';
import './App.css';
import Login from './Menu/Login';
import Register from './Menu/Register';
import Product from './Menu/Product';
import Home from './Menu/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../Menu/Login">Login</Link>
          </li>
          <li>
            <Link to="../Menu/Register">Register</Link>
          </li>
          <li>
            <Link to="../Menu/Product">Register</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Product">
            <Product />
          </Route>


        </Switch>
      </div>
    </Router>

  );
}

export default App;
