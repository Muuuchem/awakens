import React from 'react';
// import CanvasElements from './canvas_elements';
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
          canvas: null,
        };
        window.lines = [];
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
      console.log(this.refs.canvas);
      // this.setState({ canvas: this.refs.canvas });
      window.ctx = this.refs.canvas.getContext('2d');
      this.draw();
    }

    draw() {
        let can = this.state.canvas;
        console.log(can);
        return (
            new Limb({canvas: this.state.canvas, location: {x: 0, y: 0, z: 0}})
        );

    }

    render() {
        return (

                <canvas className="canvas" ref="canvas" width={this.state.canvasWidth} height={this.state.canvasHeight}/>

        );
    }
}


export default Canvas;
