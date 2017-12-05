import React from 'react';
import Canvas from '../canvas/canvas';
import { HashRouter, Switch, Link, Redirect } from 'react-router-dom';



class LandingPage extends React.Component {

    // linkSignIn() {
    //     return (
    //     <Redirect to="/signup"/>
    //     );
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">NuTree</h1>
                </header>
                <p className="App-intro">
                    Welcome to the NuTree, where we build you a personalized tree that maps your
          personal genetic blood nutrient levels!

            <Link to="/signup"> Sign In/Register</Link>
            <br/>
            <Link to="/home"> Upload Genetic Information</Link>
        </p>
                <div className="Canvas">
                    <Canvas />
                </div>
            </div>
        );
    }
}

export default LandingPage;
