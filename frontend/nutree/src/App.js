import React, { Component } from 'react';
import logo from './logo.svg';
import Canvas from './components/canvas/canvas';
import SessionForm from './components/login/login_form';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Header from './components/header/header';

import './App.css';

const App = () => {
  return (
    <div className="main-back">
      <Header />

      <Route path="/home" component={LandingPage} />
      <Route exact path="/login" component={SessionForm} />
      <Route exact path="/signup" component={SessionForm} />
    </div>
  );
};

export default App;
