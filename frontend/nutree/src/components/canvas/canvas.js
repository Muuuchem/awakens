import React from 'react';
import CanvasElements from './canvas_elements';
import Branch from '../tree/branch';
import Node from '../tree/node';
import opts from '../opts';
import Limb from '../tree/limb';
 root.CANVAS_WIDTH = window.innerWidth;
 root.CANVAS_HEIGHT = window.innerHeight;


class Canvas extends React.Component {
    constructor() {
        super();

        this.state = {
          canvasHeight: root.CANVAS_HEIGHT,
          canvasWidth: root.CANVAS_WIDTH,
          context: null,
        };
        window.lines = [];
    }

    componentDidMount() {
      this.setState({ context: this.refs.canvas.context });
      console.log(this.state.context);
       // this.canvas = this.refs.canvas;
       // this.state.context = this.canvas.context;
       console.log(this.state.context);
       debugger
    }

    draw() {
        // this.setState({ context: this.refs.canvas.context });
        console.log(this.state.context);
        return (
            <Limb context={this.state.context} location={{x: 0, y: 0, z: 0}}/>
        );

    }

    render() {
        return (
                <CanvasElements width={this.state.canvasWidth} height={this.state.canvasHeight}>
                    {
                        this.draw()
                    }
                </CanvasElements>

        );
    }
}


export default Canvas;
