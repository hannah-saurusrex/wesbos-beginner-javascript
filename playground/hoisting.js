// function declarations and variable declarations are 'hoisted'
// bascially if you declare a function before you write it, your document will automatically arrange the elments on the page so that it understands what you're saying

sayHi();

function sayHi() {
  console.log('hey');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}
