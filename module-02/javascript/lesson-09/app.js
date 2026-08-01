var products = [
    {
        id: 101,
        title: "Earphones",
        variations: [
            { id: 1, color: "black", quantity: 4 },
            { id: 2, color: "white", quantity: 2 },
            { id: 3, color: "blue", quantity: 3 },
        ],
        price: 400
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "gold", quantity: 4 },
            { id: 2, color: "pink", quantity: 7 },
            { id: 3, color: "red", quantity: 5 },
        ],
        price: 400
    },
]

console.log(products[1].variations[2].quantity)

// ----------------------------------------------------
// var product = {
//     id: 101,
//     title: "Earphones",
//     variations: [
//         { id: 1, color: "black", quantity: 4 },
//         { id: 2, color: "white", quantity: 2 },
//         { id: 3, color: "blue", quantity: 3 },
//     ],
//     price: 400
// }

// var totalQuantity = 0;

// for (var i = 0; i < product.variations.length; i++) {
//     totalQuantity = totalQuantity + product.variations[i].quantity
// }

// console.log(totalQuantity)

// console.log(product.variations[0].quantity)
// console.log(product.variations[1].quantity)
// console.log(product.variations[2].quantity)

// var product = {
//     id: 101,
//     title: "Earphones",
//     quantity: 10,
//     colors: ["black", "white", "blue"],
//     price: 400
// }

// console.log(product.colors[1])






// --------------------------------------------------------------------
// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     },
// ];



// for (var i = 0; i < students.length; i++) {
//     students[i].marks = students[i].marks + 5
// }

// console.log(students)

// var totalMarks = 0;

// for (var i = 0; i < students.length; i++) {
//     totalMarks = totalMarks + students[i].marks
// }

// console.log(totalMarks)
// console.log(totalMarks / students.length)

// --------------------------------------------------------
// Q-4 Using the same `students` array:

// - Print all student names using a `for` loop.
// - Print all student marks using a `for` loop.
// - Print all student details in this format:
// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     },
// ];


// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name + " - " + students[i].marks + " - " + students[i].atten)
// }

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])

// -------------------------------------
// Q3. Array of Objects

// Complete the following:

// 1. Print Ali's marks.
// 2. Print Ahmed's attendance.
// 3. Change Zubair's marks to `95`.
// 4. Change Ahmed's attendance to `true`.
// 5. Print the updated array.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// console.log(students[0].name)
// console.log(students[1].atten)

// students[2].marks = 95

// console.log(students)




// ------------------------------------------
// Q-2
// - Print the student's name.
// - Print the city.
// - Change the city to `"Lahore"`.
// - Print the updated object.

// var student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// console.log(student.name)
// console.log(student.city)

// student.rollNo = 102;
// student.city = "Lahore"

// console.log(student)

// ----------------------------------------

// 1-
// var colors = ["Red", "Blue", "Green", "Yellow"];

// - Print the first color.
// - Print the last color.
// - Change `"Blue"` to `"Black"`.
// - Print the updated array.

// console.log(colors[0])
// console.log(colors[colors.length - 1])

// colors[1] = "Black";

// console.log(colors)