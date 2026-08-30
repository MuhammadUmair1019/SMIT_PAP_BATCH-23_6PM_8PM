// ========================================
// DOM - Document Object Model
// ========================================


// 1. getElementById()
// Selects ONE element using its ID

let heading1 = document.getElementById("heading1");

console.log(heading1);

heading1.textContent = "I Love HTML";


// ========================================


// 2. getElementsByClassName()
// Selects MULTIPLE elements using class

let headings = document.getElementsByClassName("heading");

console.log(headings);

// First element
console.log(headings[0]);

// Second element
console.log(headings[1]);

headings[0].style.color = "red";
headings[1].style.color = "blue";


// ========================================


// 3. getElementsByTagName()
// Selects elements using HTML tag

let h1Elements = document.getElementsByTagName("h1");

console.log(h1Elements);

h1Elements[0].style.backgroundColor = "yellow";


// ========================================


// 4. querySelector()
// Selects the FIRST matching element

// Using ID
let headingById = document.querySelector("#heading1");

console.log(headingById);


// Using class
let firstHeading = document.querySelector(".heading");

console.log(firstHeading);


// Using tag
let firstH1 = document.querySelector("h1");

console.log(firstH1);


// ========================================


// 5. querySelectorAll()
// Selects ALL matching elements

let allHeadings = document.querySelectorAll(".heading");

console.log(allHeadings);

allHeadings[0].textContent = "Hello HTML";
allHeadings[1].textContent = "Hello CSS";


// ========================================


// 6. querySelectorAll() with forEach()

let messages = document.querySelectorAll(".message");

messages.forEach(function (message) {
    message.style.color = "green";
});


// ========================================


// 7. Access the Body

let body = document.body;

console.log(body);

body.style.backgroundColor = "lightgray";


// ========================================


// 8. Access the Head

let head = document.head;

console.log(head);


// ========================================


// 9. Access the HTML document

let html = document.documentElement;

console.log(html);


// ========================================


// QUICK SUMMARY

// ID
document.getElementById("heading1");

// CLASS
document.getElementsByClassName("heading");

// TAG
document.getElementsByTagName("h1");

// FIRST matching element
document.querySelector(".heading");

// ALL matching elements
document.querySelectorAll(".heading");
