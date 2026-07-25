// ======================================================
// Arrays - Adding, Updating, and Accessing Elements
// ======================================================

var array = [2, 3, 4];

// Add a new element at the end
array.push(30);

// Update the last element
array[array.length - 1] = 40;

console.log(array); // [2, 3, 40]

// ------------------------------------------------------
// More Array Examples
// ------------------------------------------------------

// var array = [2, 3, 4];

// // Add element at the end
// array.push(10);

// // Add elements at the beginning
// array.unshift(20);
// array.unshift(30);

// console.log(array.length); // Total elements
// console.log(array);

// ======================================================
// Arrays vs Separate Variables
// ======================================================

// var names = ["Ali", "Zubair", "Ahmed"];
// var marks = [70, 40, 90];
// var attendance = [true, false, true];

// Access related data using the same index
// console.log(names[0] + " -> " + marks[0] + " -> " + attendance[0]);
// console.log(names[1] + " -> " + marks[1] + " -> " + attendance[1]);
// console.log(names[2] + " -> " + marks[2] + " -> " + attendance[2]);

// ------------------------------------------------------
// Array Indexing
// ------------------------------------------------------

// var names = ["Ali", "Zubair", "Ahmed"];
// // Index:        0        1         2

// console.log(names);
// console.log(names.length);

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]); // undefined

// ======================================================
// String Methods
// ======================================================

// var title1 = "  mobile   ";
// var title2 = "Mobile";

// console.log(title2.length);

// Remove spaces
// console.log(title1.trimStart());
// console.log(title1.trimEnd());
// console.log(title1.trim());

// Change letter case
// console.log(title2.toLowerCase());
// console.log(title2.toUpperCase());

// Compare strings (ignore spaces and case)
// if (title1.trim().toLowerCase() === title2.trim().toLowerCase()) {
//     console.log("Both are equal");
// } else {
//     console.log("They are different");
// }

// ======================================================
// Conditional Statements (if / else)
// ======================================================

// var age = 17;

// if (age >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }

// ======================================================
// == vs ===
// ======================================================

// ==  -> Compares value only
// === -> Compares value and data type

// var x = 10;
// var y = "10";

// if (x === y) {
//     console.log("Both are equal");
// } else {
//     console.log("They are different");
// }

// if (x == y) {
//     console.log("Both are equal");
// } else {
//     console.log("They are different");
// }