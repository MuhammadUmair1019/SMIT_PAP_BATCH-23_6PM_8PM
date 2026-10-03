
let marks = [40, 50, 60, 70];

function myMap(array, callback) {
    let copyArrary = [];

    for (let i = 0; i < array.length; i++) {
        copyArrary.push(callback(array[i], i, array))
    }

    return copyArrary
}

let result = myMap(marks, (value, index, array) => {
    console.log(value, index, array)
    return value + 10;
})
console.log(marks)
console.log(result)

// [].map((value, index, array) => { })





// ---------------------------------------
// 5. Add a status property
// Har user ke object mein status: "active" add karo.

// const users = [
//     { name: "Ali", age: 22 },
//     { name: "Sara", age: 19 },
//     { name: "Ahmed", age: 25 }
// ];

// let obj = { name: "Ali", age: 22 }

// obj.status = true;
// console.log(obj)

// const updatedUsers = users.map(user => {
//     user.status = true;

//     return user

// })

// console.log(users)
// console.log(updatedUsers)






// // Expected:
// // [
// //   { name: "Ali", age: 22, status: "active" },
// //   { name: "Sara", age: 19, status: "active" },
// //   { name: "Ahmed", age: 25, status: "active" }
// // ]

// 6. Convert Celsius to Fahrenheit
// Formula: F = (C × 9/5) + 32

// const temperatures = [0, 10, 20, 30, 40];

// // Expected: [32, 50, 68, 86, 104]

// filter() — Hard
// 7. Filter numbers divisible by 3 and 5
// const numbers = [10, 15, 20, 30, 45, 50, 60];

// // Expected: [15, 30, 45, 60]

// 8. Filter users above 18
// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "Ahmed", age: 16 },
//   { name: "Usman", age: 25 }
// ];

// // Expected:
// // [
// //   { name: "Sara", age: 22 },
// //   { name: "Usman", age: 25 }
// // ]

// 9. Filter products under 1000
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "USB", price: 700 }
];


// const updatedProducts = products.filter(product => product.price <= 1000)

// console.log(updatedProducts)




// // Expected:
// // [
// //   { name: "Mouse", price: 500 },
// //   { name: "USB", price: 700 }
// // ]

// 10. Filter names containing "a"
// Case-insensitive condition lagao.

const names = ["Ali", "John", "Sara", "Usman", "Bilal", "Peter"];

// const updatedNames = names.filter(name => name.toLowerCase().includes("a"))
// console.log(updatedNames)

// // Expected: ["Ali", "Sara", "Usman", "Bilal"]

// 11. Filter students who passed
// Passing marks >= 50.

const students = [
    { name: "Ali", marks: 45 },
    { name: "Sara", marks: 78 },
    { name: "Ahmed", marks: 32 },
    { name: "Usman", marks: 65 }
];

const filteredStudents = students.filter(student => student.marks >= 50)

console.log(filteredStudents)

// // Expected:
// // [
// //   { name: "Sara", marks: 78 },
// //   { name: "Usman", marks: 65 }
// // ]

// 12. Filter active users with age above 20
// Dono conditions satisfy honi chahiye.

// const users = [
//   { name: "Ali", age: 22, active: true },
//   { name: "Sara", age: 19, active: true },
//   { name: "Ahmed", age: 25, active: false },
//   { name: "Usman", age: 30, active: true }
// ];

// // Expected:
// // [
// //   { name: "Ali", age: 22, active: true },
// //   { name: "Usman", age: 30, active: true }
// // ]

// ⭐ filter() + map() — Hard
// 13. Filter even numbers, then square them
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // Expected: [4, 16, 36, 64]

// 14. Filter expensive products, then get names
// Price > 1000.

// const products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 25000 },
//   { name: "USB", price: 700 }
// ];

// // Expected: ["Keyboard", "Monitor"]

// 15. Filter passed students, then get their names
// const students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 80 },
//   { name: "Ahmed", marks: 55 },
//   { name: "Usman", marks: 30 },
//   { name: "John", marks: 90 }
// ];

// // Expected: ["Sara", "Ahmed", "John"]

// 16. Filter adults, then convert names to uppercase
// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "Ahmed", age: 19 },
//   { name: "Usman", age: 15 }
// ];

// // Expected: ["SARA", "AHMED"]

// 17. Filter products in stock, then get their prices
// const products = [
//   { name: "Laptop", price: 80000, inStock: true },
//   { name: "Mouse", price: 500, inStock: false },
//   { name: "Keyboard", price: 1500, inStock: true },
//   { name: "Monitor", price: 25000, inStock: false }
// ];

// // Expected: [80000, 1500]

// 18. Filter high-scoring students, then add 5 bonus marks
// Sirf students with marks >= 70 select karo, phir unke marks mein 5 add karo.

// const students = [
//   { name: "Ali", marks: 65 },
//   { name: "Sara", marks: 72 },
//   { name: "Ahmed", marks: 88 },
//   { name: "Usman", marks: 55 }
// ];

// // Expected: [77, 93]

// 19. Filter usernames longer than 5 characters, then uppercase
// const users = [
//   { username: "ali123" },
//   { username: "sara" },
//   { username: "ahmed786" },
//   { username: "john" },
//   { username: "usman99" }
// ];

// // Expected: ["ALI123", "AHMED786", "USMAN99"]

// 20. 🔥 Challenge — Filter + Map with multiple conditions
// Sirf woh students select karo jo:

// marks >= 60

// age >= 18

// phir unka naam uppercase mein return karo.

// const students = [
//   { name: "Ali", age: 17, marks: 80 },
//   { name: "Sara", age: 20, marks: 75 },
//   { name: "Ahmed", age: 19, marks: 55 },
//   { name: "Usman", age: 22, marks: 90 },
//   { name: "John", age: 16, marks: 95 }
// ];

// // Expected: ["SARA", "USMAN"]








// const names = ["Ali", "Ahmed", "Sara", "Usman", "John"];

// const filterdNames = names.filter(name => name.length > 4)

// console.log(filterdNames)