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

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

/* convert the above function to an arrow function */
// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

/* first iteration of an arrow function. this works great, and wes said you can stop here! */
// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

/* let's take the arrow function a bit further and feel super fancy */
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
/* this one is a bit complicated and tricky to understand. maybe we went too far...? (think about your future self!) */
