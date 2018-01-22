import React from 'react';
import { Layer, Rect, Stage, Shape, Group } from 'react-konva';
import CanvasElements from '../canvas/canvas_elements';
import opts from '../opts';
import Node from './node';
import Limb from './limb';

export default class Branch {
    constructor(parent) {
        console.log(parent, "HEREHRHEHREHR");

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
                   x: opts.speed * cosA * sinB,
                   y: opts.speed * sinA * sinB,
                   z: opts.speed * cosB
               };
        this.end = this.closest = new Node(
                  parent.end.x,
                  parent.end.y,
                  parent.end.z
                );



        this.done = false;
        this.time = 0;
        this.scale = parent.end.screen.scale;

        // this.state = {
        //     iteration: parent.iteration + 1,
        //     start: parent.end,
        //     angle: {
        //         a: angleA + parent.iteration * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random())),
        //         b: angleB + parent.iteration * .8 * ((-Math.PI / 16) + ((Math.PI / 8) * Math.random()))
        //     },
        //     size: (.7 + .2*Math.random())*parent.size,
        //     color: 'hsla(hue, 80%, 50%, alp)'
        //         .replace( 'hue', (1 - ((parent.iteration+1)/opts.maxIterations)) *40)
        //         .replace( 'alp', 1- ((parent.iteration+1)/opts.maxIterations)),
        //     speed: {
        //         x: opts.speed * cosA * sinB,
        //         y: opts.speed * sinA * sinB,
        //         z: opts.speed * cosB
        //     },


        //     end: this.closest = new Node(
        //         parent.end.x,
        //         parent.end.y,
        //         parent.end.z
        //     ),
        //
        //     done: false,
        //     time: 0,
        //     scale: parent.end.screen.scale,
        //
        // };
        // this.color = color: 'hsla(hue, 80%, 50%, alp)'
                // .replace( 'hue', (1 - ((props.parent.iteration+1)/opts.maxIterations) *40)
                // .replace( 'alp', 1- ((props.parent.iteration+1/ops.maxIterations)),
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }


    update() {
        if (!this.done) {

            this.end.x += this.speed.x;
            this.end.y += this.speed.y;
            this.end.z += this.speed.z;

            this.time += .1;

            if (Math.random() < this.size * opts.splitSizeProbabilityMultiplier || this.time > this.size) {

                if (this.iteration < opts.maxIterations) {
                    console.log(this);
                    window.lines.push(new Branch(this));
                    window.lines.push(new Branch(this));
                } else {

                    // lines.push(new Leaf(this));
                    console.log('new leaf!!!');
                }

                this.done = true;
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
    }

    draw()  {
            let that = this;
            console.log(that.start.screen.x, that.end.x, "CHECK THIS OUT");
            return (<Shape

        sceneFunc = {
              function (ctx) {
                ctx.strokeStyle = that.color;
                ctx.lineWidth = opts.startSize*that.start.screen.scale;
                ctx.beginPath();
                ctx.moveTo(that.start.screen.x, that.start.screen.y);
                ctx.lineTo(that.end.x, that.end.y);

                ctx.stroke();
                // Konva specific method
                ctx.fillStrokeShape(this);

            }
        }
            />);

    }
    render() {
      console.log(this, "hey I am here and we are not drawing anything!!!");
      this.start.hasntCalculatedScreen = this.end.hasntCalculatedScreen = true;
        return (
            this.draw()
        );
    }
}
