// ======================================
// IF / ELSE STATEMENTS
// ======================================
// Used to make decisions in JavaScript.
//
// Data Types:
// - String  -> "Ali", "Hello"
// - Number  -> 10, 25, 100
// - Boolean -> true, false
// ======================================



// ======================================
// Strict Equality (===)
// Checks BOTH value and data type
// ======================================

var x = 10;
var y = 10;

if (x === y) {
    console.log("True");
} else {
    console.log("False");
}

// ======================================
//  Strict Equality with
// different data types
// ======================================

var x = 10;      // Number
var y = "10";    // String

if (x === y) {
    console.log("Correct");
}

// No output because:
// Number 10 is NOT equal to String "10"



// ======================================
//  Loose Equality (==)
// Checks only the value
// JavaScript converts the data type
// ======================================

var x = 10;
var y = "10";

if (x == y) {
    console.log("Correct");
}

// Output: Correct



// ======================================
// Comparison Operators
// ======================================
// ==   Equal to (value only)
// ===  Strict equal (value + type)
// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to
// ======================================



// ======================================
// Greater than or Equal (>=)
// ======================================

var age = 18;

if (age >= 18) {
    console.log("Eligible");
}

// ======================================
// Less than or Equal (<=)
// ======================================

var age = 18;

if (age <= 18) {
    console.log("18 or younger");
}



// ======================================
//  Less than (<)
// ======================================

var age = 17;

if (age < 18) {
    console.log("Minor");
}



// ======================================
// Greater than (>)
// ======================================

var age = 19;

if (age > 18) {
    console.log("Adult");
}



// ======================================
// Boolean Values
// ======================================
// A boolean has only two values:
// true or false
// ======================================

console.log(true == true);   // true



// ======================================
//  Checking a Boolean
// ======================================

var x = false;

if (x == true) {
    console.log("TRUE");
}

// No output because x is false.



// ======================================
//  Using prompt() and if
// ======================================

var name = prompt("Please enter your name:");

if (name == "Ali") {
    alert("Welcome " + name);
}

// If the user enters "Ali",
// an alert saying "Welcome Ali" appears.