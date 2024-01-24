/* 
    ? Document Object Model (the DOM)
    * an object containing the structure and content of the html page
*/

console.log(document);

/*
    ? Document / Window / Navigator / History
    * document -> outlines the html rendered
    * window -> handles browser-specific functions
    * navigator -> handles language and globalization / localization
    * history -> handles browser session history

*/

console.log(window);
console.log(navigator.language);
// console.log(history.back()); // takes me to whatever page I was on previously


// ! Create an element using the DOM

// 1. use .createElement() method to create new element object

const header = document.createElement('h1')
console.log(header);

// 2. use .textContent property (or others) to add content to element

header.textContent = 'Document Object Model Lesson'
// header.innerHTML = 'Document <strong>Object</strong> Model Lesson' // renders the HTML
// header.innerText = 'Document <strong>Object</strong> Model Lesson' // displays the raw HTML without rendering it

// 3. append the element to its parent element

document.body.appendChild(header)



// ! Interact with Elements already on the page
// Let's add a new item to the list

// step one - create
const lineItem = document.createElement('li')

// step two - give it content
lineItem.textContent = 'Attend Live Session'
// set its classes, etc
lineItem.classList.add('listItem')
// and whatever else!
lineItem.id = 'done-item'

// step three - append to parent element
// uh oh... first we have to access the parent element!

/* 
    ? Accessing Elements
    * we can access elements in A BUNCH of ways
        * getElementById -> HTMLElement
        * getElementsByClassName -> HTMLCollection
            * do not have array methods
            * but they do have lengths
            * and you can loop over them
        * getElementsByTagName -> HTMLCollection
        * querySelector -> HTMLElement
        * querySelectorAll -> NodeList
*/

// first, select the element
const todoList = document.getElementById('list')
console.log(todoList);

// then you can append to it (or make other changes)
todoList.appendChild(lineItem)

// this one select several items
const lineItems = document.getElementsByClassName('listItem')
console.log(lineItems);

// an HTMLCollection is array-like, we can loop over it
for (item of lineItems) {
    if (item.id === 'done-item') {
        const checkMark = document.createElement('span')
        checkMark.innerText = ' √'
        item.appendChild(checkMark)
    }
}

// here's another way to select a set of elements
const headers = document.getElementsByTagName('h1')
console.log(headers);

// remember it's an HTMLCollection, not a single element
// so we can't access its properties without looping over it first 
// headers.style.color = '#370fa7'
for (item of headers) {
    item.style.color = '#370fa7'
}

// querySelector takes ANY VALID CSS selector and returns the FIRST matching items
const strike = document.querySelector('#done-item')
strike.style.textDecoration = 'line-through'

// querySelectorAll returns ALL matching items
const h1 = document.querySelectorAll('h1')
console.log(h1);

const title = document.querySelectorAll('#listTitle')
console.log(title);

// returns a NodeList, which can be accessed by index
// title[0].style.color = 'red'

// these two lines do the same thing! Except they have subtly different return types
// const lineItems2 = document.getElementsByClassName('listItem')
const lineItems2 = document.querySelectorAll('.listItem')

// for (item of lineItems2) {
//     item.style.textDecoration = 'line-through'
// }