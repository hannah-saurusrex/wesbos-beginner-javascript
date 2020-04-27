function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup entirely!
  popup.remove(); // this doesn't remove from JavaScript's memory entirely
  /* eslint-disable no-param-reassign */
  popup = null; // this will remove entirely
  /* eslint-enable no-param-reassign */
}

// make prompt function
function ask(options) {
  return new Promise(async function(resolve) {
    // create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"></input>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );

    // check if they want a cancle button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // ToDo:: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function() {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true } // only listen one time.
      );
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true } // only listen for this event to happen once, then remove itself
    );
    // when someone does submit, resolve the data taht was in the input box
    // insert the popup in the DOM
    document.body.appendChild(popup);
    // put a small timeout before we add the 'open' class.
    await wait(50);
    popup.classList.add('open');
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;

  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?' },
  { title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over our array
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  // when we are done the loop, return it
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}
go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
