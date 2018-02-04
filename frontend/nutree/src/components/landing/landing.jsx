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
        <p className="App-intro">
          Welcome to the NuTree, where we build you a personalized tree that maps your personal genetic blood nutrient
          levels!
          <Link to="/signup" className="button">
            {' '}
            Sign In/Register
          </Link>
          <br />
          <Link to="/home" className="button">
            {' '}
            Access Genetic Information
          </Link>
          <button className="button" onClick={genomeLink}>
            Upload Genetic Information
          </button>
        </p>
        <Canvas />
        <VitaminDetail />
        <RecipeMatches />
      </div>
    );
  }
}

export default LandingPage;
