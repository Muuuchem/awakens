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
      vitamins: ['VITA_RAE', 'VITB12', 'MG'],
    };
  }

  // componentDidMount() {
  //   let recipes = this.props.getRecipes(this.state.vitamines).then((a) => {
  //     console.log(a, this.props)
  //   });
  //   console.log(recipes);
  // }

  componentWillReceiveProps() {
    // console.log(a[0].data[0].recipe.image);
    console.log(this.props);
  }

  render() {
    const rows = [];
    [0, 1, 2].forEach((n) => {
      const a = (
        <div className="recipe_img_name">
          <img className="recipe_image" src={this.state.recipe_img_urls[n]} />
          <div className="recipe-name">{this.state.recipe_names[n]}</div>
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
