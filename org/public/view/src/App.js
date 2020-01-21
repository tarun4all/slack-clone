import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <div><h1>about</h1></div>
              </Route>
              <Route path="/">
                <div><h1>Home</h1></div>
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
