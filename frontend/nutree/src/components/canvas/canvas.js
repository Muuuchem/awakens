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
        };
        window.lines = [];
    }



    draw() {
        return (
            <Limb location={{x: 0, y: 0, z: 0}}/>
        );

    }

    render() {
        return (
            <div>
                <CanvasElements ref="canvas" width={this.state.canvasWidth} height={this.state.canvasWidth}>
                    {
                        this.draw()
                    }
                </CanvasElements>

            </div>
        );
    }
}


export default Canvas;
