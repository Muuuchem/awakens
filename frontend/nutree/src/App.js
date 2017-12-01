import React, { Component } from 'react';
import logo from './logo.svg';
import Canvas from './components/canvas/canvas';
import SessionForm from './components/login/login_form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NuTree</h1>
        </header>
        <p className="App-intro">
          Welcome to the NuTree, where we build you a personalized tree that maps your
          personal genetic blood nutrient levels!
        </p>
        <SessionForm/>
        <div className="Canvas">
          <Canvas/>
        </div>
      </div>
    );
  }
}

export default App;
