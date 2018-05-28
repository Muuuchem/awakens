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
        <nav id="nav">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#science">The science</a>
            </li>
          </ul>
        </nav>
        <section className="style two" id="overview">
          <div className="two-content">
            <div className="two-inner">
              <h1>Overview</h1>
            </div>
            <div className="list">
              <div>
                <p>
                  NuTree connects with your genomeLink account to access nutrional genomic data.
                </p>
                <img
                  src={require('../../images/dna1.jpg')}
                  alt="dna"
                  className="img-responsive"
                />
              </div>
              <div>
                <img
                  src={require('../../images/reciepe.jpg')}
                  alt="dna"
                  className="img-responsive"
                />
                <p>
                  Using your personal nutrional data, NuTree suggests recipes with high levels of
                  the micronutrients your body craves most, based on predictative factors in your
                  genomic data.
                </p>
              </div>
              <div>
                <p>
                  Nutree also constructs a 3D tree animation, that serves as your unique nutritional
                  fingerprint, in order to help you visualize your natural nutritional needs.
                </p>
                <img
                  src={require('../../images/tree.png')}
                  alt="tree"
                  className="img-responsive"
                />
              </div>
              <div>
                <img
                  src={require('../../images/192px-DNA_Double_Helix.png')}
                  alt="boohoo"
                  className="img-responsive"
                />
                <p>
                  The tree consists of 11 branches of various sizes, with branch sizes
                  representative of your predicted micronutrient levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="style three" id="how">
          <div className="three-content">
            <header>
              <h1>Here's how it works.</h1>
            </header>
            <div className="three-inner">
              <h2>Nutritional data fingerprint:</h2>
              <div class-name="fingerprint">
                <p>
                  You upload your 23andme, ancestory.com, or MyHeritage data through genomeLink and
                  connect your account through this application.
                </p>
                <p>
                  Nutree uses your overall genomic nutritional profile in order to build a unique 3D
                  visuapzation of this data that you can then share with friends
                </p>
                <p>
                  {' '}
                  Larger branches near the bottom of the tree are representative of micronutrients
                  that are predicted to be naturally abundant in your bloodstream.
                </p>
                <p>
                  Smaller branches are representative of micronutrients that your body may have
                  naturally lower blood serum levels for.
                </p>
                <p>
                  {' '}
                  Your micronutrient tree visualization is 100% unique to your genetic information and
                  as a result is as personalized to you as your fingerprint!
                </p>
              </div>
              <h2>Recipe Suggestions:</h2>
              <div class-name="fingerprint">
                <p>
                  Based on genetic markers predictative of natural blood serum levels for 11 essential
                  micronutrients...
                </p>
                <p>
                  Nutree suggests recipes that are high in the three micronutrients that your genetic
                  data suggests your body might need the most of.
                </p>
                <p>
                  Custom search features are availible through Edamam recipe search API to help you
                  filter out potential allergens and other foods that are restricted from your diet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="style four" id="science">
          <div className="four-content">
            <h1>What science is this project based upon?</h1>
            <ul className="intro">
              <li>
                The scientific connections between genomic data and nutrient levels used in this
                application are based upon genome-wide association studies.
              </li>
              <li>
                By analyzing genomic data from large samples of the population, researchers have
                discovered links between certain genetic markers and serum nutrient levels.
              </li>
              <li>
                {' '}
                Be aware that genetic markers predictative of blood serum nutrient levels are by no
                means definitively reflective of your current micronutrient levels.
              </li>
              <li>
                The human body is a complicated biochemical system and many other factors such as
                diet and exercise also contribute to a person's serum nutrient levels at any given
                time.
              </li>
              <li>
                Nutree is meant to provide insight into what types of nutrients your body might
                require higher levels of, while suggesting foods that may help your body fulfill
                nutritional requirements.
              </li>
              <li>
                Information and statements regarding dietary supplements have not been evaluated by
                the Food and Drug Administration and are not intended to diagnose, treat, cure, or
                prevent any disease.
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
