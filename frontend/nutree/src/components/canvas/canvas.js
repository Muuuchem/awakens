import React from 'react';
import CanvasElements from './canvas_elements';
import Branch from '../tree/branch';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

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
            <Branch
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
                <button onClick={() => this.createRectangle()}>Create rectangle</button>
            </div>
        )
    }
}

export default Canvas