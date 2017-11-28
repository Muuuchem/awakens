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
        this.draw
    }

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    draw() {
        return (<Shape fill='#00D2FF'
            sceneFunc={
                function (ctx) {
                    ctx.lineWidth = this.size * this.start.screen.scale;
                    ctx.beginPath();
                    ctx.moveTo(this.start.screen.x, this.start.screen.y);
                    ctx.lineTo(this.end.screen.x, this.end.screen.y);
                    ctx.stroke();
                    // Konva specific method
                    ctx.fillStrokeShape(this);
                }
            }
        />)

    };
    render() {
        return (
            this.draw()
        );
    };
};
