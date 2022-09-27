// Select and Manipulate on individual elements
// -- getElementById

const list = document.getElementById("list")
console.log(list);
// list.textContent = "Hello World"
// list.textContent = "<h1>Hello World</h1>"
// list.innerHTML = "<h1>Hello World</h1>"

// Select and Manipulate on individual elements
// -- querySelector

const el = document.querySelector("ul li:nth-child(2)")
el.querySelector('p .fa-times').style.color = "yellow"

// Select and Manipulate on multiple elements
// -- looping over getElementsByClassName

const icons = document.getElementsByClassName("fa")
console.log(icons);

for(let i = 0; i < icons.length; i++){
    console.log(icons[i]);
    icons[i].style.color = "blue"
}

// DOM Styles and Classes v1
const h2 = document.querySelector('header h2') //node
h2.style.color = "orange"
h2.style.backgroundColor = "green"

const lis = document.querySelectorAll('li')

for(let i = 0; i < lis.length; i++){
    lis[i].style.backgroundColor = "lightblue"
}

lis[0].style.cssText = "background-color: yellow; font-size: 20px;"

// DOM Styles and Classes v2
const h2v2 = document.querySelector('header h2') //node
h2v2.className = 'changeBg'
h2v2.className = 'changeFt'
h2v2.className += ' changeBg' //concatenation

h2v2.classList.add('changeMg')
h2v2.classList.remove('changeFt')

// Get and Set and Remove Attributes

const div = document.querySelector('div.wrapper')
console.log(div.getAttribute('class'));
div.setAttribute('style', 'background-color: coral;')
div.setAttribute('alt', 'This is a div')
div.removeAttribute('alt')

const btn = document.querySelector('#add-btn')
const input = document.querySelector('#add-input')

btn.addEventListener('click', function(event){
    event.preventDefault()
    // console.log(event)
    input.setAttribute('value', 'Hello World')
})

// DOM Navigation
const listItem = document.getElementById('list')
//who's your daddy
console.log(listItem.parentNode);
//who's your daddy's daddy?
console.log(listItem.parentNode.parentNode);
console.log(listItem.parentNode.parentNode.parentNode.parentNode);

//who's your child?
console.log(listItem.childNodes);
console.log(listItem.children);

//who's your next sibling?
console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling);

//Creating Elements
