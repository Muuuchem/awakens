import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { thunk } from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    middlewares.push(createLogger);
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;
