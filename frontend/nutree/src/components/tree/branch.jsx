import React from 'react';
import { Layer, Rect, Stage, Shape } from 'react-konva';
import CanvasElements from '../canvas/canvas_elements';

export default class Branch extends React.Component {
    constructor(parent) {
        super();

        this.state = {
            t_minus: parent.t_minus - 1,
            start: parent.end,
        }
    }

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    draw()  {
            return (<Shape fill='#00D2FF'
        sceneFunc = {
            function(ctx) {
                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.moveTo(400, 400);
                ctx.lineTo(300, 300);
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
