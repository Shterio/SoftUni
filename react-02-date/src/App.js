import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {new Date(Date.now()).toLocaleTimeString()}
        </p>
      </header>
    </div>
  );
}

export default App;
