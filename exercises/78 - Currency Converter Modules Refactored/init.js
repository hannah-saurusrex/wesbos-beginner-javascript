import { generateOptions } from './util.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect } from './elements.js';

export function init() {
  // when the page loads, this code runs!!
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);
  // populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
