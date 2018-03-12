import axios from 'axios';

export const fetchRecipes = (nutrients) => (
    axios({
        method: 'GET',
        url: `http://127.0.0.1:3000/edamam/search/${nutrients[0]}`
    })
);