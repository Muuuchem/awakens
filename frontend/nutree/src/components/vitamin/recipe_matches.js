import React from 'react';
// import { Link, Route } from 'react-router-dom';

class RecipeMatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vitamin_name: 'Vitamin A',
      recipe_img_urls: [
        'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
        'https://drop.ndtv.com/albums/COOKS/corngallery/creolespicedcornthumb_640x480.jpg',
        'http://www.technobuffalo.com/wp-content/uploads/2014/04/fast-food.jpg',
      ],
      recipe_names: ['Salmon Dinner', 'Creole Corn', 'Burger & Fries'],
      recipes: null,
    };

  }

  async componentDidMount() {
    

    // await this.props.recipes ? console.log(this.props.recipes.recipes) : console.log('noresults yetasdlkfj')
  }


  componentWillReceiveProps(newProps) {
    console.log(this.props.recipes, newProps, 'NEW PROPS');
  }

  render() {
    let rows = [];
    console.log(this.props.recipes, 'checkpropsthru');
    let recipe_images = this.props.recipes ? this.props.recipes : this.state.recipe_img_urls;
    let recipe_name = this.props.recipes ? this.props.recipes : this.state.recipe_names;
    [0, 1, 2].forEach(n => {
      let a = (
        <div className="recipe_img_name">
          <img className="recipe_image" src={recipe_images[n]} />
          <div className="recipe-name">{recipe_name[n]}</div>
        </div>
      );
      rows.push(a);
    });
    return (
      <div className="recipes_preview">
        <div className="inner">
          <p className="inner-text">Suggested Recipes</p>
          <div className="recipe_images">{rows}</div>
        </div>
        <button className="button">More Recipes</button>
      </div>
    );
  }
}

export default RecipeMatches;
