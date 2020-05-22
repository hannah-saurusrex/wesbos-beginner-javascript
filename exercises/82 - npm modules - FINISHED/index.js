import wait from 'waait';
import faker from 'faker'; // gives you fake data for testing purposes

console.log(`Hello ${faker.name.firstName()}`);

async function go() {
  console.log('going!');
  await wait(200);
  console.log('ending');
}
go();
