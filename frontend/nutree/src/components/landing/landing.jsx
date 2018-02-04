import React from 'react';
import Canvas from '../canvas/canvas';
import { HashRouter, Switch, Link, Redirect } from 'react-router-dom';
import genomeLink from '../../api_util/genome_link';
import VitaminDetail from '../vitamin/vitamin_description';
import RecipeMatches from '../vitamin/recipe_matches';



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
            <Link to="/home"> Access Genetic Information</Link>
                    <button onClick={genomeLink}>
                        Upload Genetic Information
                    </button>
        </p>

                <Canvas ref='canvas'/>
                <VitaminDetail/>
                <RecipeMatches/>
            </div>
        );
    }
}

export default LandingPage;
