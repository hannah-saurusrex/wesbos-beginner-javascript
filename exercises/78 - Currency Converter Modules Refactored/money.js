import { generateOptions } from './util.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect } from './elements.js';

const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {}; // needed to store data.

const optionsHTML = generateOptions(currencies);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
