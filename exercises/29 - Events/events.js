const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked!');
}

const hooray = () => console.log('hooray!');
// same function, but written as arrow function.
// technically an anon function, but written in a variable.

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// this is an anonymous function since there is no name associated with the function
// 1. go get something "butts".
// 2. listen for something "click"
// 3. go ahead and do something. console.log it worked. or maybe you toggle on a style class.

butts.removeEventListener('click', handleClick);
// to remove, must reference event and reference to function. can't remove with an anonymous function.

// binding -- handleClick function is bound to the butts element.
// handleClick is also bound to the coolButton element.
// in the removeEventLIstener, handleClick is unbound from the butts element.

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('buying item');
// }

// buyButtons.forEach(function(buyButton) {
//   console.log('binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

function handleBuyButtonCLick(event) {
  console.log('you clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price)); // gets price from dataset of button you clicked
  console.log(event.target);
  console.log(event.currentTarget); // should probably use this one more often
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonCLick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('you clicked the window');
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);
