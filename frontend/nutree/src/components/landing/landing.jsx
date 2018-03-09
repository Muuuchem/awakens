import React from 'react';
import { HashRouter, Switch, Link, Redirect } from 'react-router-dom';

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
            <div>
              <h2>Recipes</h2>
              <h2>just for you</h2>
            </div>
            <h3>Based on your genetic information</h3>
          </div>
        </section>

        <section className="style2" id="one">
          <div className="one-content">
            <header>
              <h2>The sky is the limit.</h2>
            </header>
            <ul className="intro">
              <li>
                You upload your 23andme, ancestory.com, or MyHeritage data through genomeLink.
              </li>
              <li>
                NuTree connects with your genomeLink account to access nutrional genetic data.
              </li>
              <li>
                Using your nutrional data, NuTree suggests recipes and builds your DNA personalized
                three dimensional tree.
              </li>
            </ul>
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
