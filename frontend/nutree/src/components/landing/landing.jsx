import React from 'react';
import Canvas from '../canvas/canvas';
import { HashRouter, Switch, Link, Redirect } from 'react-router-dom';
import genomeLink from '../../api_util/genome_link';
import VitaminDetail from '../vitamin/vitamin_description';
import RecipeMatches from '../vitamin/recipe_matches';

class LandingPage extends React.Component {
  

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Welcome to the NuTree, where we build you a personalized tree that maps your personal genetic blood nutrient
          levels!

          <br />
          
          <button className="button" onClick={genomeLink}>
            Upload Personal Genetic Information From GenomeLink
          </button>
        </p>
                <Canvas ref="canvas"/>
                <VitaminDetail/>
                <RecipeMatches/>
            </div>
        );
    }
}

export default LandingPage;
