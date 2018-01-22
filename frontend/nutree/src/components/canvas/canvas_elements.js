import React from 'react';
import { Layer, Stage } from 'react-konva';

class CanvasElements extends React.Component {

    render() {
        return (
            <Stage width={this.props.width} height={this.props.height}>
                <Layer ref="canvas">
                    {
                        this.props.children
                    }
                </Layer>
            </Stage>
        );
    }
}

export default CanvasElements;
