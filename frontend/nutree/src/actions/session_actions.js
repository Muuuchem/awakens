import * as APIUtil from '../api_util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});


export const signup = user => dispatch => (
    APIUtil.signup(user).then(user1 => {
        console.log(user1);
        dispatch(receiveCurrentUser(user1));        
    }, err => {
        console.log(err);
        dispatch(receiveErrors(err))
    })
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user1 => {
        console.log(user1, "WHERERS");
        dispatch(receiveCurrentUser(user1))
    }, err => {
        console.log(err);
        dispatch(receiveErrors(err))
    })
);

export const logout = () => dispatch => (
   () => (
        dispatch(receiveCurrentUser(null))
    )
);