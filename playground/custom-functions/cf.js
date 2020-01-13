/* calculate a bill at a restaurant */

/* functions are created/defined, and then they're called */

// this is function definition
function calculateBill(billAmount, taxRate = 0.13) {
  // billAmount and taxRate are parameters (placeholders). you will use them when you run the function.
  console.log(billAmount, taxRate);
  // this is the function body. anything inside body will be part of the funciton
  console.log('running, calculate Bill!');
  const total = billAmount * (1 + taxRate);
  return total; // this is a temporary variable, because it is only accessable inside of this function.
}

// this is a function call, or a *run* of the function
const wesTotal = 500;
// const wesTaxRate = 0.3;
// const myTotal = calculateBill(100, 0.13); // 100 & 0.13 are the arguments. now we're running the function and our parameters are replaced for the arguments. these could also be variables
// const myTotal2 = calculateBill(wesTotal, wesTaxRate);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Hannah');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 20 + 30, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// yell(doctorize('Hannah'));
