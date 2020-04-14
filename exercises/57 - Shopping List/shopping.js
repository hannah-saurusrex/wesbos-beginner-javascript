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
  // clear out anything left in the form input
  //   e.currentTarget.item.value = '';
  e.currentTarget.reset();
  // fire off a custom event to tell anyone that cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated')); // running this dispatchEvent and creating a new custom event helps keep concerns seperate
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

// save items into local storage
function mirrorToLocalStorage() {
  console.info('saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items));
}

// when page is refreshed/reloaded, local storage items are pulled out and shown
function restoreFromLocalStorage() {
  console.info('restoring from local storage');
  // pull items from local storage
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // lsItems.length checks to see if there are any items at all..if so...
    items.push(...lsItems); // if any exist, spread them into our items array.
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems); // listen for itemsUpdated, and then run displayItems 🎉
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();
