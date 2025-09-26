//! get elements methords

//?  from id

const heading = document.getElementById("heading")
console.log(heading);

const paragraph1 = document.getElementById("paragraph-1")
console.log(paragraph1);
// like this get elements from 'ids'


//?  from class

const head = document.getElementsByClassName("head")

console.log(head);


const para = document.getElementsByClassName("para")

console.log(para);

// like this get elements from 'classes'

//? from tagNames

const h1 = document.getElementsByTagName('h1')
console.log(h1);

const body = document.getElementsByTagName('body')

// like this get element from tagNames


// ? from querySelector / querySelectorAll


                // querySelector

const tagName = document.querySelector('body')
console.log(tagName);

const id = document.querySelector('#heading')
console.log(id);

const className = document.querySelector('.head')
console.log(className);


                // querySelectorAll

const classNameElements = document.querySelectorAll('.head')

// like this get elements from querySelector / querySelectorAll 
// this is the mixture of all methods to get elements

 
