/* eslint-disable */
const name = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = 'she\'s so cool';
const sentence2 = `she's so cool`;

const song = `oooooh

y 

i like

pizza;`

const hello = "hello my name is " + name + ". nice to meet you";

// don't do it this way. this is ridiculous.
// let hello2 = 'hello my name is ';
// hello2 = hello2 + name;
// hello2 = hello2 + ' nice to meet you';

const hello3 = `hello my name is ${name}. Nice to meet you. I am ${1 +100} years old.`;

const html = `
  <div>
  <h2>${name}</h2>
  <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;
