// u35346496
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Tour Comparison App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Gallery />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
