import * as Canvas from './canvas/canvas.js';
import React from 'react';
root.CANVAS_WIDTH = window.innerWidth;
root.CANVAS_HEIGHT = window.innerHeight;
let CANVAS_WIDTH = root.CANVAS_WIDTH;
let CANVAS_HEIGHT = root.CANVAS_HEIGHT;
const opts = {
    speed: 1,
    splitSizeProbabilityMultiplier: 1 / 1000,
    maxIterations: 8,
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
    vanishPoint: {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2
    },
    translations: {
        x: 0,
        y: 200,
        z: 400
    },
    rotY: 0,
    rotYsin: 0,
    rotYcos: 0,
};

export default opts;
