import opts from '../opts';
import Node from './node';
import Limb from './limb';

export default class Branch {
    constructor(parent) {

        let angleA = parent.angle.a;
        let angleB = parent.angle.b;

        this.iteration = parent.iteration + 1;
        this.start = parent.end;
        this.angle = {
          a: angleA + this.iteration * opts.angleVariationIterationMultiplier * ( opts.baseAngleVariation + opts.addedAngleVariation * Math.random() ),
          b: angleB + this.iteration * opts.angleVariationIterationMultiplier * ( opts.baseAngleVariation + opts.addedAngleVariation * Math.random() ),
        },
        this.size = ( opts.baseSizeMultiplier + opts.addedSizeMultiplier * Math.random() ) * parent.size;
        this.color = 'hsla(hue, 80%, 50%, alp)'
          .replace( 'hue', (1 - ((parent.iteration+1)/opts.maxIterations)) *40)
          .replace( 'alp', 1 - ((parent.iteration+1)/opts.maxIterations));

          let sinA = Math.sin(this.angle.a);
          let sinB = Math.sin(this.angle.b);
          let cosA = Math.cos(this.angle.a);
          let cosB = Math.cos(this.angle.b);


        this.speed = {
                   x: opts.speed * sinA * cosB,
                   y: opts.speed * cosA * cosB,
                   z: opts.speed * sinB
               };
        this.end = this.closest = new Node(
                  parent.end.x,
                  parent.end.y,
                  parent.end.z
                );

        this.done = false;
        this.time = 0;
        this.scale = parent.end.screen.scale;


        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }


    update() {
        if (!this.done) {

            this.end.x += this.speed.x;
            this.end.y += this.speed.y;
            this.end.z += Math.abs(this.speed.z);

            this.time += .1;

            if (Math.random() < this.size * opts.splitSizeProbabilityMultiplier || this.time > this.size) {

                if (this.iteration < opts.maxIterations) {
                    window.lines.push(new Branch(this));
                    window.lines.push(new Branch(this));
                } else {

                    // lines.push(new Leaf(this));
                    console.log('new leaf!!!');
                }

                this.done = true;
            }
          }
            // some lines can share their start
            if (this.start.hasntCalculatedScreen)
                this.start.calculateScreen();

            // but not their end
            this.end.calculateScreen();

            this.closest = this.start;
            if (this.end.transformed.z < this.start.transformed.z)
                this.closest = this.end;


    }

    draw()  {
            if (this.end.screen) {
              window.ctx.strokeStyle = this.color;
    	        window.ctx.lineWidth = (opts.startSize * this.start.screen.scale)/2;
  	          window.ctx.beginPath();
  	          window.ctx.moveTo( this.start.screen.x, this.start.screen.y );
  	          window.ctx.lineTo( this.end.screen.x, this.end.screen.y );
  	          window.ctx.stroke();
            }

    }
    render() {
      this.start.hasntCalculatedScreen = this.end.hasntCalculatedScreen = true;
        return (
            this.draw()
        );
    }
}
