// select the elements on the page -
// canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');

// setup our canvas for drawing
// const { width } = canvas;
// const { height } = canvas;

// make a variable called height & width from the same properties on our canvas.
const { width, height } = canvas;

// create random x & y starting points on the canvas.

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// write a draw function

// write a handler for the keys

// clear / shake function

// listen for arrow keys
