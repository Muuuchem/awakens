import React from 'react';
import SearchContainer from './search_container';

class Recipe extends React.Component {

    componentDidMount() {
        console.log("component did mount");
    }

    render() {
        return (
            <div>
                <h1> Recipe Search </h1>
                <SearchContainer/>

            </div>
        );
    }
}

export default Recipe;
