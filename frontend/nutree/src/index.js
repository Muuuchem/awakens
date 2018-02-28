import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root } from './root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

// const store = configureStore();
// window.getState = store.getState;
let store;
document.addEventListener('DOMContentLoaded', () => {
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
});
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();


