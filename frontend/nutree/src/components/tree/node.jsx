// import React from 'react';
import opts from '../opts';
export default class Node {

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.screen = {};
        this.transformed = {};
        this.hasntCalculatedScreen = true;
    };

    calculateScreen() {
        var x = this.x,
            y = this.y,
            z = this.z;

        // rotate around Y
        var X = x;
        x = x * opts.rotYcos - z * opts.rotYsin;
        z = z * opts.rotYcos + X * opts.rotYsin;

        // translate
        x += opts.translations.x;
        y += opts.translations.y;
        z += opts.translations.z;

        // I only need the z for now
        this.transformed.z = z;

        this.screen.scale = opts.focalLength / z;
        this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
        this.screen.y = opts.vanishPoint.y + y * this.screen.scale;

        this.hasntCalculatedScreen = false;    
    }

    anim() {
        // window.requestAnimationFrame(anim);
    }
   
};

// export default class Node extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             t_minus: parent.t_minus + 1,
//             start: parent.end,
//             angle: {
//                 a: parent.angle.a + parent.t_minus * 
//             }
//         }
//     }

//     handleClick = () => {
//         // window.Konva is a global variable for Konva framework namespace
//         // this.setState({
//         //     color: window.Konva.Util.getRandomColor()
//         // });
//     }


//     render() {
//         return (
//             this.draw()
//         );
//     };
// };

