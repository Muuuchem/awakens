import { combineReducers } from 'redux';
import nutritionReducer from './nutrition_reducer';





const rootReducer = combineReducers({
    nutritionReducer,
});

export default rootReducer;
