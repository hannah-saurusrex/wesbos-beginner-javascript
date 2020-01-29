const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked!');
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

// this is an anonymous function since there is no name associated with the function
// 1. go get something "butts".
// 2. listen for something "click"
// 3. go ahead and do something. console.log it worked. or maybe you toggle on a style class.

butts.removeEventListener('click', handleClick);
