import React from 'react';
import { Link } from 'react-router-dom';

const signUp = () => {
  this.props.history.push('/signup');
};

const sign = () => (
  <button className="button" id="signIn" to="/signin" onClick={signUp}>
    Sign Up!
  </button>
);

const personalGreeting = (currentUser, logout) => (
  <button className="button" id="logOut" to="/signin" onClick={logout}>
    Log Out {currentUser.email}!
  </button>
);

const Greeting = props =>
  (props.currentUser ? personalGreeting(props.currentUser, props.logout) : sign);

export default Greeting;
