import React from 'react';
import { Link, Route } from 'react-router-dom';
import RecipeContainer from './recipe_container';
import RecipeMatches from './recipe_matches';
import { withRouter } from 'react-router';

class RecipeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRecipes(['VITA_RAE', 'VITB12', 'MG']);
    }

    componentWillReceiveProps(newProps, Context) {
        if (!newProps.recipes) {
            console.log(newProps, 'new props fail');
        } else {
            console.log(newProps, 'NEW PROPS RECIEVED!!!');
        }
        console.log(Context, 'new context');
    }

    componentWillUpdate(update) {
        console.log(update, 'update2');
    }


    render() {
        const { recipes, currentUser } = this.props;
        let recipe_list = recipes ? recipes : [];
        console.log(recipe_list, 'recipe_index logging recipe_list');
        console.log(this.state);
        return (
            <div>
                    {<RecipeMatches recipes={recipe_list} currentUser={currentUser}/>}
            </div>
        );
    }
}



export default withRouter(RecipeIndex);
