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

// IIFE
// immediately invoked function expression
// throw parentheses around the whole expression, then add another set at the end, to immediately run it ();

// (function(age) {
//   return `you are cool and age ${age}`;
// })(10);

// METHODS!!! A method is a function that lives inside of an object
const hannah = {
  name: 'Hannah McMahon',
  // method
  sayHi: function() {
    console.log('Hey Hannah');
    return 'Hey Hannah';
  },
  // short-hand method
  yellHi() {
    console.log('HEY HAAANNNNNNAAAAAHHH');
  },
  // arrow function
  whisperHi: () => {
    console.log('hii hannah im a mouse');
  }
}

// callback functions
// click callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!');
}

button.addEventListener('click', function() {
  console.log('Nice Job!');
}); // callback...meaning a function that we give it access to, i.e. the hannah yellHi function!

// Timer callback
setTimeout(function() {
  console.log('Done! time for a drink!')
}, 1000);