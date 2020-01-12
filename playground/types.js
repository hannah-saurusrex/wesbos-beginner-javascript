// /* eslint-disable */
// const name = 'wes';
// const middle = "topher";
// const last = `bos`;

// const sentence = 'she\'s so cool';
// const sentence2 = `she's so cool`;

// const song = `oooooh

// y

// i like

// pizza;`

// const hello = "hello my name is " + name + ". nice to meet you";

// // don't do it this way. this is ridiculous.
// // let hello2 = 'hello my name is ';
// // hello2 = hello2 + name;
// // hello2 = hello2 + ' nice to meet you';

// const hello3 = `hello my name is ${name}. Nice to meet you. I am ${1 +100} years old.`;

// const html = `
//   <div>
//   <h2>${name}</h2>
//   <p>${hello}</p>
//   </div>
// `;

// document.body.innerHTML = html;

/*
const age = 100;
const name = 'wes';

// const a = 10;
// const b = 20;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids; // how many left over after given to all kids; dad will get two.
console.log(`each kid gets ${eachKidGets}`);
*/

// this is an object
/*
const person = {
  first: 'wes',
  last: 'bos',
  age: 100,
};
*/

let dog;
console.log(dog); // this will show up as undefined in the console

let somethingUndefined; // no value
const somethingNull = null; // only null if explicitly defined as null.

const cher = {
  first: 'cher',
};

const teller = {
  first: 'raymond',
  last: 'teller',
};

teller.first = 'Teller';
teller.last = null; // legally changed last name to nothing.
