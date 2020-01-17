// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// // set the textContent property on the element
// // heading.textContent = 'hannah is cool';
// // console.log(heading.textContent); // text content is newer, but gives contents of the element
// // console.log(heading.innerText); // inner text is aware of css styling
// // document.querySelector & document.querySelectorAll are mainstream and most typical ways to grab elements from a page.
// // document.getElementById is older and not as commonly used.

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');

// working with Classes!!!!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
