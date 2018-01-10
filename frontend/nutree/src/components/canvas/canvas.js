import React from 'react';
import CanvasElements from './canvas_elements';
import Branch from '../tree/branch';
import Node from '../tree/node';
import opts from '../opts';

 root.CANVAS_WIDTH = window.innerWidth;
 root.CANVAS_HEIGHT = window.innerHeight;

export const CANVAS_WIDTH = root.CANVAS_WIDTH;
export const CANVAS_HEIGHT = root.CANVAS_HEIGHT;

class Canvas extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    createBranch() {
        
    }


    draw() {
        return  (
            <Branch parent={{end: new Node(0, 0, 0),
            angle: { a: Math.PI / 2, b: -Math.PI / 2 },
        size: opts.startSize,
            iteration: 1}}
            />
        );
        
    }

    render() {
        return (
            <div>
                <CanvasElements width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
                    {
                        this.draw()
                    }
                </CanvasElements>
                {/* <button onClick={}>Create rectangle</button> */}
            </div>
        )
    }
}

export default Canvas