import React from 'react';
import { HashRouter, Switch, Link, Redirect } from 'react-router-dom';
// import VitaminDetail from '../vitamin/vitamin_description';
// import RecipeMatches from '../vitamin/recipe_matches';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="style1" id="intro">
          <div className="intro-content">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <h3>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </h3>
            <ul className="intro">
              <li>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </li>
            </ul>
          </div>
        </section>

        <section className="style2" id="one">
          <div className="one-content">
            <header>
              <h2>The sky is the limit.</h2>
            </header>
            <p className="one">
              Some resources claim that 'the sky's the limit' was coined by Cervantes in Don
              Quizote. This appears to add to the list of popular fallacies about coinages
              attributed to Cervantes; for example, 'don’t put all your eggs in one basket'.
            </p>
          </div>
        </section>

        <section className="style3" id="two">
          <div className="two-content">
            <header>
              <h2>The sky is the limit.</h2>
            </header>
            <p className="two">
              Some resources claim that 'the sky's the limit' was coined by Cervantes in Don
              Quizote. This appears to add to the list of popular fallacies about coinages
              attributed to Cervantes; for example, 'don’t put all your eggs in one basket'.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
