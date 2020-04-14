const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

// listen to submit event on form to add item added

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value; // grab the value the user typed
  // if input field is left blank, don't submit
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // add the value to our state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // clear out anything left in the form input
  //   e.currentTarget.item.value = '';
  e.currentTarget.reset();
  // fire off a custom event to tell anyone that cares that the items have been updated
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
    </li>`
    )
    .join('');
  console.log(html);
  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
