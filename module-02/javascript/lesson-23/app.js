var products = [
    {
        id: 101,
        title: "Apple AirPods (3rd Generation)",
        description: "Wireless earbuds with spatial audio and long battery life.",
        price: 24999,
        variations: [
            { color: "white", quantity: 6 },
            { color: "black", quantity: 4 }
        ],
        reviews: [
            {
                id: 110,
                comment: "Amazing sound quality and battery life.",
                rating: 4.8,
                date: "02/08/2026",
                status: true
            },
            {
                id: 111,
                comment: "A little expensive but worth it.",
                rating: 4.4,
                date: "02/08/2026",
                status: false
            },
            {
                id: 112,
                comment: "Fit could be better.",
                rating: 3.8,
                date: "02/08/2026",
                status: true
            }
        ]
    },
    {
        id: 102,
        title: "Samsung Galaxy Buds2 Pro",
        description: "Premium wireless earbuds with active noise cancellation.",
        price: 19999,
        variations: [
            { color: "graphite", quantity: 5 },
            { color: "white", quantity: 5 },
            { color: "purple", quantity: 5 }
        ],
        reviews: [
            {
                id: 120,
                comment: "Excellent noise cancellation.",
                rating: 4.7,
                date: "02/08/2026",
                status: true
            },
            {
                id: 121,
                comment: "Very comfortable to wear.",
                rating: 4.6,
                date: "02/08/2026",
                status: true
            },
            {
                id: 122,
                comment: "Battery could last longer.",
                rating: 3.9,
                date: "02/08/2026",
                status: true
            }
        ]
    },
    {
        id: 103,
        title: "Sony WH-1000XM5",
        description: "Industry-leading wireless noise-canceling headphones.",
        price: 42999,
        variations: [
            { color: "black", quantity: 5 },
            { color: "silver", quantity: 3 }
        ],
        reviews: [
            {
                id: 130,
                comment: "Best headphones I've ever owned.",
                rating: 5.0,
                date: "02/08/2026",
                status: true
            },
            {
                id: 131,
                comment: "Outstanding sound quality.",
                rating: 4.9,
                date: "02/08/2026",
                status: true
            },
            {
                id: 132,
                comment: "Price is a bit high.",
                rating: 4.2,
                date: "02/08/2026",
                status: true
            }
        ]
    },
];

let arr = [];
products.forEach(p => {
    arr.push(p.title)
})

console.log(arr)

let p = products.map(product => product.title);
console.log(p)




// -------------------------------------------------
// let marks = [30, 40, 50, 60, 70];

// let filteredMarks = marks.filter((value) => value < 50).map(m => m + 10);

// let updatedMarks = filteredMarks.map(m => m + 10);

// let filteredMarks = marks.filter((value) => value < 50);
// let updatedMarks = filteredMarks.map(m => m + 10);

// let filteredMarks = marks.filter((value) => value < 50 ? true : false)
// let filteredMarks = marks.filter((value) => {
//     if (value < 50) {
//         return true
//     }
// })

// console.log(marks)
// console.log(filteredMarks)
// console.log(updatedMarks)




// -------------------------------------------------------
// let updatedMarks = marks.map((value, index) => {
//     if (value < 50) {
//         return value + 10
//     }

//     return value
// });

// let updatedMarks = marks.map((value) => {
//     if (value < 50) {
//         return value + 10
//     } else {
//         return value
//     }
// });

// console.log(marks)
// console.log(updatedMarks)


// let marks = [40, 50, 60, 70];

// let updatedMarks = marks.map((value) => value + 10);

// console.log(marks)
// console.log(updatedMarks)


// let modifiedMarks = []

// for (let i = 0; i < marks.length; i++) {
//     modifiedMarks.push(marks[i] + 10)
// }


// console.log(marks)
// console.log(modifiedMarks)










// -------------------------------------------
// let x = y => {
//     let z = 20;
//     let k = 30;

//     return z + k + y;
// };

// let x = y => y;

// console.log(x(2))

// function x(y) {
//     return y;
// }
