import merge from 'lodash/merge';

import {
    RECEIVE_RECIPE_TRIPLET,
    RECEIVE_ERRORS,
} from '../actions/recipe_actions';

const RecipeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RECIPE_TRIPLET:
            const recipes = action.recipes;
            console.log(action.recipes, 'recipe');
            if (recipes) {
                return merge({}, state, {
                    recipes
                })} else {
                    return merge({}, state, {recipes: null});
                }
        case RECEIVE_ERRORS:
            const errors = action.errors;
            return merge({}, state, {
                errors
            });
        default:
            return state;
    }
};

export default RecipeReducer;
