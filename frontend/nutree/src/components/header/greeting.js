import React from 'react';
import { Link } from 'react-router-dom';

const signUp = (props) => {
  // props.history.push('/signup');
};

const sign = () => (
  <Link to="/login">
    <button className="button" id="signIn">Sign In/Sign Up!</button>
  </Link>
);

const personalGreeting = (currentUser, logout) => (
  <button className="button" id="logOut" to="/login" onClick={logout}>
    Log Out {currentUser.email}!
  </button>
);

const Greeting = props =>
  (props.currentUser ? personalGreeting(props.currentUser, props.logout) : sign());

export default Greeting;
