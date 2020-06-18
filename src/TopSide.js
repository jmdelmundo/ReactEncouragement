import React from 'react';
import logo from './logo.svg';
import './TopSide.css';

const innerHTML = <div className="App">
<div className="App-Nav">
  <span className="appimgcont">
    <span className="appoverlay">
      <span className="letterR">R</span>
    </span>
    <img src={logo} className="TopApp-logo" alt="logo" />
  </span>
  <span className="appheadercont">
    Just Learn REACT Right now!</span>
</div>
<header className="App-header">
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

function TopSide() {
  return (
    innerHTML
  );
}

export default TopSide;
