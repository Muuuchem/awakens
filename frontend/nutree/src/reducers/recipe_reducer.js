import merge from 'lodash/merge';

import {
    RECEIVE_RECIPE_TRIPLET,
    RECEIVE_ERRORS,
} from '../actions/recipe_actions';

let defaultState = {
    recipes: null,
    errors: null,
};

const RecipeReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case RECEIVE_RECIPE_TRIPLET:
            const recipes = action.recipes[0].data;
            if (recipes) {
                return merge({}, state, {
                    recipes
                });
            } else {
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
