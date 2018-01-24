import React from 'react';
// import { Link, Route } from 'react-router-dom';

class VitaminDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vitamin_name: 'Vitamin A',
      vitamin_description: 'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Lorem ipesuim afeioa afoseifn ase.',
      vitamin_img_url: "",
    };
  }


  render() {
    return(
      <div className="vitamin_detail">
        <div className="vitamin_detail">
          <div className="vitamin_name">
             {this.state.vitamin_name}
          </div>
          <div className="vitamin-text">
            {this.state.vitamin_description}
          </div>
        </div>
        <div className="recipe_preview">
          <button>More Recipes for {this.state.vitamin_name}</button>
          <img className="recipe_image" src="https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg" height="50" width="50"></img>
        </div>
      </div>
    );
  }
}

export default VitaminDetail;
