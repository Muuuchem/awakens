import React from 'react';
import { Layer, Rect, Stage, Shape } from 'react-konva';
import CanvasElements from '../canvas/canvas_elements';
import opts from '../opts';
import Node from './node';

export default class Branch extends React.Component {
    constructor(props) {
        super(props);
        let angleA = props.parent.angle.a;
        let angleB = props.parent.angle.b;

        this.state = {
            iteration: props.parent.iteration + 1,
            start: props.parent.end,
            angle: {
                a: angleA + props.parent.iteration * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random())),
                b: angleB + props.parent.iteration * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random()))
            },
            size: (.7 + .2*Math.random())*props.parent.size,
            color: 'hsla(hue, 80%, 50%, alp)'
                // .replace( 'hue', (1 - ((props.parent.iteration+1)/opts.maxIterations) *40)
                // .replace( 'alp', 1- ((props.parent.iteration+1/ops.maxIterations)),
        };

        this.draw = this.draw.bind(this)
    };

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    draw()  {
        let sinA = Math.sin(this.state.angle.a);
        let sinB = Math.sin(this.state.angle.b);
        let cosA = Math.cos(this.state.angle.a);
        let cosB = Math.cos(this.state.angle.b);
        let speed = {
            x: opts.speed * cosA * cosB,
            y: opts.speed * sinA * sinB,
            z: opts.speed * cosB,
        }

        let end = this.closest = new Node(
            this.state.start.x,
            this.state.start.y,
            this.state.start.z
        )
            let that = this;
            
            return (<Shape fill='#00D2FF'
            
        sceneFunc = {
            function(ctx) {
                // ctx.strokeStyle = this.color;
                ctx.lineWidth = opts.size*that.state.start.screen.scale;
                ctx.beginPath();
                ctx.moveTo(that.state.start.screen.x, that.state.start.screen.y);
                ctx.lineTo(end.screen.x, end.screen.y);
                ctx.stroke();
                // Konva specific method
                // ctx.fillStrokeShape(this);
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
