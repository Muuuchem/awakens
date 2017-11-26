import React from 'react';

class Canvas extends React.Component {
    constructor() {
        super();

        this.state = {
            // rectangle: [{
            //     key: 0,
            //     width: 10,
            //     height: 30,
            //     x: 10,
            //     y: 0,
            //     color: 'red'
            // }]
        },
    }

    


    draw() {
        // return this.state.rectangle.map((rect, key) => (
        //     <MyRectangle
        //         height={rect.height}
        //         width={rect.width}
        //     //...more props 
        //     />
        // )
        // )
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

export default Canvas