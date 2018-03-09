import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <button className="button" id="logOut" to="/signin" onClick={logout}>
    Log Out {currentUser.email}!
  </button>
);

const Greeting = props =>
  (props.currentUser ? personalGreeting(props.currentUser, props.logout) : null);

export default Greeting;
