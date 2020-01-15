// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde'; // this variable was declared inside of a function, so it is only available inside said function, not available globally.
//   console.log(age); // will look inside the function for age first; if not found, will look outside function.
//   console.log(myAge);
//   console.log(hair);
// }

// go();

// function isCool(name) {
//   let cool;
//   if (name === 'wes') {
//     cool = true;
//   }
//   console.log(cool); // if cool undefined, because it's inside the function.
//   return cool;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('rufus');
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
