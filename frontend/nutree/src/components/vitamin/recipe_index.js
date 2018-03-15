import React from 'react';
import { Link, Route } from 'react-router-dom';
import RecipeContainer from './recipe_container';
import RecipeMatches from './recipe_matches';
import { withRouter } from 'react-router';

class RecipeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vitamins: ['VITA_RAE', 'VITB12', 'MG'],
        };
    }

    componentDidMount() {
        this.props.getRecipes(this.state.vitamins);
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.recipes) {
            
        }
    }


    render() {
        const { recipes, currentUser } = this.props;
        let recipe_list = recipes ? recipes : [];
        console.log(recipe_list);
        return (
            <div>
                    {<RecipeMatches recipes={recipe_list} currentUser={currentUser}/>}
            </div>
        );
    }
}



export default withRouter(RecipeIndex);
