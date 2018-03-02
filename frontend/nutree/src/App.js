import React, { Component } from 'react';
import logo from './logo.svg';
import Canvas from './components/canvas/canvas';
import SessionFormContainer from './components/login/login_container';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Header from './components/header/header';
import { AuthRoute, ProtectedRoute } from './actions/route_actions';

import './App.css';

const App = () => {
  return (
    <div className="main-back">
      <Header />
      <Switch>  
        <ProtectedRoute exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/home" component={LandingPage} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
