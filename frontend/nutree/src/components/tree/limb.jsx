import Branch from './branch';
import opts from '../opts';
import Node from './node';

class Limb {
    constructor(props) {
        this.state = {
            location: props.location,
            parent_branch: new Branch({
                end: new Node(props.location.x, props.location.y, props.location.z),
                angle: { a: Math.PI / 2, b: -Math.PI / 2 },
                size: opts.startSize,
                iteration: 0,
                // canvas: props.canvas
            }),
            // canvas: props.canvas,
        };
        this.draw = this.draw.bind(this);
        this.render = this.render.bind(this);
        this.loop = this.loop.bind(this);
        let my_branch = this.state.parent_branch;
        window.lines.push(my_branch);
        this.loop();
    }

    loop() {

        window.requestAnimationFrame(this.loop);
        window.ctx.fillStyle = 'white';
        window.ctx.fillRect(0, 0, opts.CANVAS_WIDTH, opts.CANVAS_HEIGHT);
        opts.rotY += opts.rotYVel;
        opts.rotYcos = Math.cos(opts.rotY);
        opts.rotYsin = Math.sin(opts.rotY);

        window.lines.map(function (line) {  line.update(); });
        window.lines.sort(function (a, b) { return b.closest.transformed.z - a.closest.transformed.z; });
        window.lines.map(function (line) {  line.render(); });
    }




    draw() {
    }

    render() {
        return (
                        this.draw()
        );
    }
}

export default Limb;
