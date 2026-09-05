// =====================================================
// LESSON 18 - DOM (Document Object Model)
// =====================================================


// =====================================================
// EVENT HANDLING
// =====================================================

// Select the button
const button = document.querySelector("button");


// Function to change the background color
function bgChange() {
    document.body.style.background = "red";
}


// Check the function
console.log(bgChange);


// Add click event to the button
button.onclick = bgChange;


// We can also call the function directly,
// but then it will run immediately.

// bgChange();


// =====================================================
//  GETTING AND CHANGING HTML ATTRIBUTES
// =====================================================

// Select the anchor/link
const link = document.querySelector("a");


// Get all attribute names
// console.log(link.getAttributeNames());


// Get the value of a specific attribute
// console.log(link.getAttribute("href"));


// Change the href attribute
// link.setAttribute("href", "https://facebook.com");


// Open the link in a new tab
// link.setAttribute("target", "_blank");


// =====================================================
//  CLASSLIST
// =====================================================

// Select the box
const box = document.getElementById("box");


// Add classes
box.classList.add("active", "success");


// Check all classes
console.log(box.classList);


// Remove a class
// box.classList.remove("success");


// Replace one class with another
box.classList.replace("active", "success");


// Check if an element contains a specific class
console.log(box.classList.contains("actives"));


// =====================================================
// DOM TRAVERSING
// =====================================================


// -----------------------------------------------------
// Accessing elements using document.children
// -----------------------------------------------------

// console.log(
//     document.children[0].children[1].children[2]
// );


// -----------------------------------------------------
// parentElement
// -----------------------------------------------------

// Get the parent element of #box
// console.log(
//     document.getElementById("box").parentElement
// );


// Get the parent's parent
// console.log(
//     document.getElementById("box").parentElement.parentElement
// );


// -----------------------------------------------------
// previousElementSibling
// -----------------------------------------------------

// Get the previous sibling element
// console.log(
//     document.getElementById("box").previousElementSibling
// );


// Get the previous sibling of the previous sibling
// console.log(
//     document.getElementById("box")
//         .previousElementSibling
//         .previousElementSibling
// );


// -----------------------------------------------------
// nextElementSibling
// -----------------------------------------------------

// Get the next sibling element
// console.log(
//     document.getElementById("box").nextElementSibling
// );


// -----------------------------------------------------
// parentNode
// -----------------------------------------------------

// parentNode can also be used to access the parent
// console.log(
//     document.getElementById("box")
//         .parentNode
//         .parentNode
//         .parentNode
// );


// -----------------------------------------------------
// children
// -----------------------------------------------------

// Get only child elements
// console.log(
//     document.getElementById("box").children
// );


// -----------------------------------------------------
// childNodes
// -----------------------------------------------------

// Get all child nodes
// Includes elements, text nodes, comments, etc.
// console.log(
//     document.getElementById("box").childNodes
// );
