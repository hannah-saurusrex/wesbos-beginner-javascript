import wait from 'waait';
import { name } from 'faker'; // gives you fake data for testing purposes
import { formatDistance } from 'date-fns'; // import a segment of the big library

// console.log(`Hello ${name.firstName()}`);

const fakeNames = Array.from(
  { length: 10 },
  () => `${name.firstName()} ${name.lastName()}`
);
// console.log(fakeNames);

async function go() {
  console.log('going!');
  await wait(200);
  console.log('ending');
}
// go();

const diff = formatDistance(
  new Date(1986, 3, 4, 11, 32, 0),
  new Date(1986, 3, 4, 10, 32, 0),
  { addSuffix: true }
); //= > 'in about 1 hour'
console.log(diff);
