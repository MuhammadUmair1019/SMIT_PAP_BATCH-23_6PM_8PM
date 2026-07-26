// ======================================================
// Arrays: Adding, Updating, Accessing, and Removing Elements
// ======================================================

// Create an array
var array = ["Ali", "Ahmed", "Zubair"];

// ======================================================
// Adding Elements
// ======================================================

// splice(startIndex, deleteCount, newValue)
array.splice(2, 0, "Mujtaba");

console.log(array);

// Add to the end
// array.push("Waqar");

// Add to the beginning
// array.unshift("Wasy");

// ======================================================
// Removing Elements
// ======================================================

// Remove the last element
// var lastElement = array.pop();

// Remove the first element
// var firstElement = array.shift();

// console.log(array);
// console.log("------------------");
// console.log("Removed:", lastElement);
// console.log("Removed:", firstElement);

// Add the removed elements back
// array.push(lastElement);
// array.unshift(firstElement);

// console.log(array);

// ======================================================
// Updating Elements
// ======================================================

// Update an existing element
// array[1] = "Mujtaba";

// Add a new element by index
// array[3] = "Abdullah";

// Add using array length (append)
// array[array.length] = "Saad";

// Assigning to a skipped index creates empty slots
// array[5] = "Jalal";

// console.log(array);

// ======================================================
// Accessing Elements
// ======================================================

// console.log(array[1]);
// console.log(array[3]);
// console.log(array[4]); // undefined (if no value exists)

// ======================================================
// Array Length
// ======================================================

// console.log(array.length);

// Last valid index
// console.log(array.length - 1);

// ======================================================
// Without Arrays
// ======================================================

// var name1 = "Ali";
// var name2 = "Ahmed";
// var name3 = "Zubair";