import merge from 'lodash/merge';

import {
    RECEIVE_RECIPE_TRIPLET,
    RECEIVE_ERRORS,
} from '../actions/recipe_actions';

let defaultState = {
    recipes: null,
    errors: null,
};

let recipes = [];
const RecipeReducer = (state = defaultState, action) => {
    Object.freeze(state);
    Object.freeze(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case RECEIVE_RECIPE_TRIPLET:
            //  recipes = action.recipes[0].data;
            recipes = action.recipes[0].data.slice(0,3);
            if (recipes.length>1) {
                console.log(recipes);
                return merge({}, newState, {
                    recipes: recipes
                });
            } else {
                    return merge({}, state, {recipes: null});
                }
        case RECEIVE_ERRORS:
            const errors = action.errors;
            return merge({}, newState, {
                errors
            });
        default:
            return newState;
    }
};

export default RecipeReducer;
