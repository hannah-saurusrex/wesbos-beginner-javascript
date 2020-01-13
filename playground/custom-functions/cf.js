/* calculate a bill at a restaurant */

/* functions are created/defined, and then they're called */

// this is function definition
function calculateBill() {
  // this is the function body. anything inside body will be part of the funciton
  console.log('running, calculate Bill!');
  const total = 100 * 1.13;
  return total; // this is a temporary variable, because it is only accessable inside of this function.
}

// this is a function call, or a *run* of the function
const myTotal = calculateBill();
// console.log(`Your total is $${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
