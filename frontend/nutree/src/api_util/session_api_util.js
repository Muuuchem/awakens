import axios from 'axios';

export const login = user => (
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/users/signin',
        data: { user }
    })
);

export const signup = user => (
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/users/signup',
        data: { user }
    })
);

export const logout = () => (
    // fetch({
    //     method: 'DELETE',
    //     url: 'http://127.0.0.1:3000/users/logout'
    // })
    console.log('LOGGED OUT!!!')
);

