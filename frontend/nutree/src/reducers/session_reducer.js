import merge from 'lodash/merge';

import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';

const nullUser = Object.freeze({
    currentUser: null,
    errors: []
});

const SessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser;
            if (!!currentUser) {
                sessionStorage.setItem('jwt', currentUser.data.token);
            } else if(currentUser === null) {
                console.log('CLEARED');
                sessionStorage.clear();
            }
            console.log(sessionStorage);
            return merge({}, nullUser, {
                currentUser
            });
        case RECEIVE_ERRORS:
            const errors = action.errors;
            return merge({}, nullUser, {
                errors
            });
        default:
            return state;
    }
};

export default SessionReducer;
