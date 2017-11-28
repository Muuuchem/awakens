import React from 'react';
import { Layer, Rect, Stage, Shape } from 'react-konva';
import CanvasElements from '../canvas/canvas_elements';

export default class Branch extends React.Component {
    constructor(parent) {
        super(parent);

        this.state = {
            t_minus: parent.t_minus + 1,
            start: parent.end,
            angle: {
                a: parent.angle.a + parent.t_minus * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random())),
                b: parent.angle.b + parent.t_minus * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random()))
            }
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
