// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// console.log(doctorize2('Hannah'));

// function expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// functions declared with the `function` keyword are considered "hoisted". meaning javascript hoists them to the top of the page giving them priority.
// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

// arrow functions offer concise syntax -- shorter. don't have their own scope.
// arrow functions are anonymous functions.
/* eslint-disable */
const inchToCM = (inches) => inches * 2.54; // this is an orrow function
  // as soon as the keyword `return` appears in a function, any code after that (inside the function) will not run. it will be undectable.
