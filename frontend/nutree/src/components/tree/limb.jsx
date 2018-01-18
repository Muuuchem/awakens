import React from 'react';
import Branch from './branch';
import opts from '../opts';
import CanvasElements from '../canvas/canvas_elements';
import Node from './node';

class Limb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.location,
            parent_branch: new Branch({
                end: new Node(props.location.x, props.location.y, props.location.z),
                angle: { a: Math.PI / 2, b: -Math.PI / 2 },
                size: opts.startSize,
                iteration: 0
            }),
        };
        // this.rotY = 0;
		    // this.rotYsin = 0;
		    // this.rotYcos = 0;
        this.draw = this.draw.bind(this);
        this.render = this.render.bind(this);
        this.loop = this.loop.bind(this);
    }

    componentDidMount() {
        let my_branch = this.state.parent_branch;
        window.lines.push(my_branch);
        this.loop();
    }

    loop() {
        window.requestAnimationFrame(this.loop);
        // console.log(this.refs);
        // const ctx = this.refs.canvas.getContext('2d');
        // ctx.fillStyle = 'white';
        // ctx.fillRect(0, 0, opts.CANVAS_WIDTH, opts.CANVAS_HEIGHT);

        opts.rotY += opts.rotYVel;
        opts.rotYcos = Math.cos(opts.rotY);
        opts.rotYsin = Math.sin(opts.rotY);

        window.lines.map(function (line) {  line.update(); });
        window.lines.sort(function (a, b) { return b.closest.transformed.z - a.closest.transformed.z; });
        window.lines.map(function (line) {  line.render(); });
    }




    draw() {
        console.log(this.state.parent_branch);

        return (
            this.state.parent_branch.render()
        );

    }

    render() {
        return (
                //  <CanvasElements>

                        this.draw()

                // </CanvasElements>

        );
    }
}

export default Limb;
