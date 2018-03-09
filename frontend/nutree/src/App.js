import React, { Component } from 'react';
import logo from './logo.svg';
import Canvas from './components/canvas/canvas';
import SessionFormContainer from './components/login/login_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/home/home';
import Header from './components/header/header';
import LandingPage from './components/landing/landing.jsx';
import { AuthRoute, ProtectedRoute } from './actions/route_actions';

import './App.css';

const App = () => (
  <div className="main-back">
    <Header />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute exact path="/home" component={HomePage} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
