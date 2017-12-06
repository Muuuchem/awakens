import React from 'react';

export default class Node extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            t_minus: parent.t_minus + 1,
            start: parent.end,
            angle: {
                a: parent.angle.a + parent.t_minus * 
            }
        }
    }

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    
    render() {
        return (
            this.draw()
        );
    };
};
