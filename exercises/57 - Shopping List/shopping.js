const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
let items = [];

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
      <input 
        value="${item.id}" 
        type="checkbox"
        ${item.complete ? 'checked' : ''}
        >
      <span class="itemName">${item.name}</span>
      <button 
        aria-label="Remove ${item.name}"
        value="${item.id}"
        >&times;</button>
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

function deleteItem(id) {
  console.log('deleting this item', id);
  // update our items array without this one
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems); // listen for itemsUpdated, and then run displayItems 🎉
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// event delegation: we listen for the click on the list <ul> but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
