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
        this.calculateScreen = this.calculateScreen.bind(this);
        this.calculateScreen();
    }

    calculateScreen() {
        var x = this.x,
            y = this.y,
            z = this.z;
            console.log(opts.rotYsin);
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


        this.screen.x = opts.vanishPoint.x + x * opts.focalLength / z;
        this.screen.y = opts.vanishPoint.y + y * opts.focalLength / z;

        this.hasntCalculatedScreen = false;
    }


}
