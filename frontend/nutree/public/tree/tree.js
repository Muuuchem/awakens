import opts from './opts';
let canvas = document.getElementById("canvas");
let w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
    ctx = canvas.getContext('2d'),

    

    rotY = 0,
    rotYsin = 0,
    rotYcos = 0,

    lines = [];

export const opts = {
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
        x: w / 2,
        y: h / 2
    },
    translations: {
        x: 0,
        y: 200,
        z: 400
    }
};

    console.log("Vanilla");