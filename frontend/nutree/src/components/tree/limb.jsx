import React from 'react';

class Limb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            speed: 1,
            splitSizeProbabilityMultiplier: 1 / 1000,
            maxIterations: this.props.size,
            startSize: 20,
            baseSizeMultiplier: .7,
            addedSizeMultiplier: .2,
            baseAngleVariation: -Math.PI / 16,
            addedAngleVariation: Math.PI / 8,
            angleVariationIterationMultiplier: .8,

            baseLeafSize: 20,
            addedLeafSize: 15,

            rotYVel: .01,
            focalLength: 250,
            // vanishPoint: {
            //     x: w / 2,
            //     y: h / 2
            // }, width and height of canvas needed
            translations: {
                x: 0,
                y: 200,
                z: 400
            },
        };
    }   

    


    draw() {
        
        
    }

    render() {
        return (
            <div>
                <CanvasElements>
                    {
                        this.draw()
                    }
                </CanvasElements>
                <button onClick={() => this.createRectangle()}> Create rectangle</button>
            </div>
        )
    }
}

export default Limb;