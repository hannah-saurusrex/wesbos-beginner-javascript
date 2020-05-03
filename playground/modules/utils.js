const last = 'Reinhart';
const middle = 'Burke';

// with 'export' in front of the function, this is a Named Export
export function returnHi(name) {
  return `Hi, ${name} ${last}`;
}
const first = 'sylus';

// modules have their own scope and only one can be in a file.
// variable 'last' can only be used in this file.

// can also export like so (or can put 'export' in front of variable && function):
export { last, middle };
// curly braces also indicate that this is a Named Export - unlimited named exports available.
export default first;
