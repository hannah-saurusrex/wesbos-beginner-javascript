const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
// console.log();
// console.error();
// console.warn();
// console.table();
// console.count();
// console.group();

// Callstack

// Grabbing Elements
// select element in elements tab. switch to console tab and type $0 and it will show you the last element you selected.

// Breakpoints
/* add debugger; into your function to use the 'sources' tab in devtools. */

// Scope

// Network Requests

// Break On Attribute
// in sources, can add a breakpoint, for example on a click event. it will add the 'debugger' feature.

// Some Setup Code

// function doALotOfStuff() {
//   console.group('Doing some stuff');
//   console.log('hey im done);
//   console.warn('watch out!');
//   console.error('hey');
//   console.groupEnd('Doing some stuff');
// }

function doctorize(name) {
  // console.count(`running docrotize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // this will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
