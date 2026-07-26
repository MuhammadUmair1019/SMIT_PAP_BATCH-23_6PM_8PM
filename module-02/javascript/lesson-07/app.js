// ======================================================
// Loops & Arrays
// ======================================================

// Reverse Loop
// Start from the last index and print each element
// Last index = length - 1
var marks = [10, 20, 30, 50];

for (var i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i]);
}


// ======================================================
// Calculate Total & Average
// ======================================================

// var scores = [1, 10, 15, 50, 60];

// // Variable to store the running total
// var totalScore = 0;

// for (var i = 0; i < scores.length; i++) {

//     console.log(scores[i]);

//     // Running total:
//     // 0 + 1  = 1
//     // 1 + 10 = 11
//     // 11 + 15 = 26
//     // 26 + 50 = 76
//     // 76 + 60 = 136
//     totalScore = totalScore + scores[i];
// }

// // Average = Total / Number of Elements
// var averageScore = totalScore / scores.length;

// console.log("Total Score =", totalScore);
// console.log("Average Score =", averageScore);


// ======================================================
// Adding Elements to an Array
// ======================================================

// var marks = [40, 50, 60, 80];

// marks.push(100);
// marks.push(20);
// marks.push(30);

// for (var i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

// // Accessing array elements using index
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);


// ======================================================
// Basic For Loop
// ======================================================

// for (var i = 0; i < 10; i++) {
//     console.log(i, "Hello, World");
// }

// for (initialization; condition; update) {
//     // code to execute repeatedly
// }


// ======================================================
// Pre-Increment vs Post-Increment
// ======================================================

// ---------- Pre-Increment (++x) ----------
// Increment first, then assign the value

// var x = 1;
// var y = ++x;

// console.log(x); // 2
// console.log(y); // 2


// ---------- Post-Increment (x++) ----------
// Assign first, then increment

// var x = 1;
// var y = x++;

// console.log(x); // 2
// console.log(y); // 1


// ======================================================
// Normal Addition
// ======================================================

// var x = 1;
// var y = x + 1;

// console.log(x); // 1
// console.log(y); // 2


// ======================================================
// Repeating Code Without a Loop
// ======================================================

// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");
// console.log("Hello, World");

// A loop helps us avoid writing the same code repeatedly.


// ======================================================
// Array Methods
// ======================================================

// const tools = ['Git', 'Docker', 'Vim', 'NPM'];

// // slice(start, end)
// // Creates a new array without modifying the original array.
// // Start index is included.
// // End index is NOT included.
// const subArray = tools.slice(1, 3);

// console.log(subArray); // ['Docker', 'Vim']
// console.log(tools);    // Original array remains unchanged


// ======================================================
// Searching in an Array
// ======================================================

// var marks = [40, 50, 60, 80];

// var input = +prompt("Please enter your search number");

// // includes() returns true or false
// var searchElement = marks.includes(input);

// // indexOf() returns the index of the element
// // Returns -1 if the element is not found
// var searchElementIndex = marks.indexOf(input);

// if (searchElement) {
//     console.log("Element found at index =", searchElementIndex);
// } else {
//     console.log("Element not found");
// }


// ======================================================
// Updating & Removing Elements
// ======================================================

// var marks = [40, 50, 60, 80];

// splice(start, deleteCount, newItem)
// Remove 1 element from index 0 and insert 90
// marks.splice(0, 1, 90);

// console.log(marks);

// Remove the last element
// marks.pop();

// Remove the first element
// marks.shift();

// Add an element to the end
// marks.push(70);

// Add an element to the beginning
// marks.unshift(90);