import React from 'react';
import { Layer, Rect, Stage, Shape } from 'react-konva';
import CanvasElements from '../canvas/canvas_elements';

class Branch extends React.Component {
    constructor(parent) {
        super();

        this.state = {
            t_minus: parent.t_minus - 1,
            start: parent.end,
            end:
        },
    }

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    draw()  {
            return (<Shape fill =”#00D2FF” draggable
        sceneFunc = {
            function(ctx) {
                ctx.beginPath();
                ctx.moveTo(20, 50);
                ctx.lineTo(220, 80);
                ctx.quadraticCurveTo(150, 100, 260, 170);
                ctx.closePath();
                // Konva specific method
                ctx.fillStrokeShape(this);
            }
        }
            />)

    };
    render() {
        return (
            <div></div>
        );
    };
};
