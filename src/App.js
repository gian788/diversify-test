import React from 'react';
import './App.css';
import PositionWidget from './widgets/Position';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PositionWidget ethAddress="0xe1f3c653248de6894d683cb2f10de7ca2253046f" />
      </header>
    </div>
  );
}

export default App;
