import {neonCursor} from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
neonCursor({
    el:document.getElementById('light'),
    shaderPoints: 16,
    curvePoints: 80,
    cruveLerp: 0.5,
    radius1: 4.5,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
});