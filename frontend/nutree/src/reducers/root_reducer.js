import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import recipeReducer from './recipe_reducer';





const rootReducer = combineReducers({
    session: sessionReducer,
    recipe: recipeReducer
});

export default rootReducer;
