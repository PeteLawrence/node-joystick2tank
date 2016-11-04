var joystick2tank = require('./src/index.js');

//The values from the Joystick
var joystickX = 50;
var joystickY = 256;

//The max values possible
var joystickXMax = 256;
var joystickYMax = 256;

//Scale the values so that they fit into the range -100 -> 100
var x = joystickX/joystickXMax*100;
var y = joystickY/joystickYMax*100;

//Perform the conversion and output to the console
console.log(joystick2tank(x, y));
