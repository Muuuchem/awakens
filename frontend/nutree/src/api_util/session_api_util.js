export const login = user => (
    fetch({
        method: 'POST',
        url: 'http://127.0.0.1:3000/users/signin',
        data: { user }
    })
);

export const signup = user => (
    fetch({
        method: 'POST',
        url: 'http://127.0.0.1:3000/users/signup',
        data: { user }
    })
);

// export const logout = () => (
//     fetch({
//         method: 'DELETE',
//         url: '/api/session'
//     })
// );

