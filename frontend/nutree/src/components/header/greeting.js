import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
    <form>
        <hgroup className="header-group">
            <div className="logout">
                 <button className="btn" to={`/signin`} onClick={logout}>Log Out {currentUser.email}!</button>
            </div>
        </hgroup>
    </form>
);

const Greeting = (props) => (
    props.currentUser ? personalGreeting(props.currentUser, props.logout) : null
);

export default Greeting;
