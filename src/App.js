import React, { useState, useEffect } from 'react';import './App.css';
import Game from './Game';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe Game</h1>
        <button className="toggle" onClick={toggleDarkMode}>Switch to {darkMode ? 'Light' : 'Dark'} Mode</button>      
      </header>
      <Game />
    </div>
  );
}

export default App;
