import React from 'react';
import logo from './logo.svg';
import './App.css';

const innerHTML = <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1>Just Learn REACT Right now!</h1>
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  <div>
    This is an unknown React Application
  </div>
</header>
</div>

function App() {
  return (
    innerHTML
  );
}

export default App;
