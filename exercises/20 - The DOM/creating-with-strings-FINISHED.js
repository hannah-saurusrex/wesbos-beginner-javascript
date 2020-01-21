const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `cute pup src="https://picsum.photos/50"/ `;
const myHTML = `
<div class = "wrapper">
  <h2>cute ${desc}</h2>
  <img src="${src}" alt="${desc}"/>
</div>`;
// myHTML will remain a string until we dump it into the DOM.

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
