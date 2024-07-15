// U35346496
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tour Comparison App</h1>
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
