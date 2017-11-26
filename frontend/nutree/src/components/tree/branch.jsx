import React from 'react';
import { Layer, Rect, Stage } from 'react-konva';

class Branch extends React.Component {
    state = { color: 'green' };

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    render() {
        return (
            <div></div>
        );
    };
};
