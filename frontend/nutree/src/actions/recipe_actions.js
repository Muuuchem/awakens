import * as APIUtil from '../api_util/recipe_api_util';
export const RECEIVE_RECIPE_TRIPLET = 'RECEIVE_RECIPE_TRIPLET';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveRecipeTriplet = (recipe1, recipe2, recipe3) => ({
    type: RECEIVE_RECIPE_TRIPLET,
    recipes: [recipe1, recipe2, recipe3],
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});


export const receiveRecipes = nutrients => dispatch => (
    APIUtil.fetchRecipes(nutrients).then(recipes => {
        console.log(recipes);
        dispatch(receiveRecipeTriplet(recipes));
    }, err => {
        console.log(err);
        dispatch(receiveErrors(err));
    })
);

