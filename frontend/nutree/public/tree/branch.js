
import opts from '../tree';

export default class Branch {
    constructor(parent) {
        let angleA = parent.angle.a;
        let angleB = parent.angle.b;

        this.iteration = props.parent.iteration + 1;
        this.start = props.parent.end;
        this.angle = {
                a: this.angleA + parent.iteration * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random())),
                b: this.angleB + parent.iteration * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random()))
            };
        this.size = (.7 + .2 * Math.random()) * props.parent.size;
        this.color = 'hsla(hue, 80%, 50%, alp)'
            .replace( 'hue', (1 - ((props.parent.iteration+1)/opts.maxIterations) *40)
            .replace( 'alp', 1- ((props.parent.iteration+1/ops.maxIterations));

        this.draw = this.draw.bind(this)
    };

    handleClick = () => {
        // window.Konva is a global variable for Konva framework namespace
        // this.setState({
        //     color: window.Konva.Util.getRandomColor()
        // });
    }

    draw() {
        let sinA = Math.sin(this.angle.a);
        let sinB = Math.sin(this.angle.b);
        let cosA = Math.cos(this.angle.a);
        let cosB = Math.cos(this.angle.b);
        let speed = {
            x: opts.speed * cosA * cosB,
            y: opts.speed * sinA * sinB,
            z: opts.speed * cosB,
        }

        let end = this.closest = new Node(
            this.state.start.x,
            this.state.start.y,
            this.state.start.z
        )
        let that = this;
        

    };
    render() {
        return (
            this.draw()
        );
    };
};