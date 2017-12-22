import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Root} from './root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

const store = configureStore();
window.getState = store.getState;


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
