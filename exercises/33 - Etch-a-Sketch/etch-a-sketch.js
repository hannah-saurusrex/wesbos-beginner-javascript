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

const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);
// create random x & y starting points on the canvas.

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  console.log(key);
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear / shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);
