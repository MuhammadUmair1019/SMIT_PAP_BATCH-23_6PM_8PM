const products = [
    {
        id: 101,
        title: "LED",
        category: "Electronics",
        variations: [
            { id: 110, color: "green", price: 400, quantity: 10 },
            { id: 111, color: "white", price: 500, quantity: 5 },
            { id: 112, color: "blue", price: 450, quantity: 0 }
        ]
    },
    {
        id: 102,
        title: "Mobile",
        category: "Electronics",
        variations: [
            { id: 120, color: "black", price: 25000, quantity: 8 },
            { id: 121, color: "blue", price: 27000, quantity: 4 },
            { id: 122, color: "white", price: 26000, quantity: 0 }
        ]
    },
    {
        id: 103,
        title: "Laptop",
        category: "Electronics",
        variations: [
            { id: 130, color: "silver", price: 85000, quantity: 3 },
            { id: 131, color: "black", price: 95000, quantity: 6 }
        ]
    },
    {
        id: 104,
        title: "T-Shirt",
        category: "Clothing",
        variations: [
            { id: 140, color: "red", price: 800, quantity: 15 },
            { id: 141, color: "black", price: 1000, quantity: 7 },
            { id: 142, color: "white", price: 900, quantity: 0 }
        ]
    },
    {
        id: 105,
        title: "Shoes",
        category: "Fashion",
        variations: [
            { id: 150, color: "white", price: 3500, quantity: 5 },
            { id: 151, color: "black", price: 4000, quantity: 9 }
        ]
    },
    {
        id: 106,
        title: "Headphones",
        category: "Electronics",
        variations: [
            { id: 160, color: "black", price: 2000, quantity: 12 },
            { id: 161, color: "blue", price: 1800, quantity: 0 },
            { id: 162, color: "white", price: 2200, quantity: 6 }
        ]
    },
    {
        id: 107,
        title: "Watch",
        category: "Accessories",
        variations: [
            { id: 170, color: "black", price: 5000, quantity: 4 },
            { id: 171, color: "pink", price: 7500, quantity: 2 }
        ]
    },
    {
        id: 108,
        title: "Keyboard",
        category: "Electronics",
        variations: [
            { id: 180, color: "black", price: 1500, quantity: 20 },
            { id: 181, color: "white", price: 1700, quantity: 0 }
        ]
    }
];



// products.filter

// console.log(products.length)


// const result = products.findIndex(product => product.colors.includes("black"));

// console.log(result)


// ----------------------------------------------------------------
// const products = [
//     {
//         id: 101,
//         title: "LED",
//         colors: ['black', 'gray', 'gold']
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         colors: ['green', 'red', 'black']
//     },
//     {
//         id: 103,
//         title: "Laptop",
//         colors: ['pink', 'brown', 'gray']
//     }
// ]



// let searchColor = 'black';
// const updatedProducts = products.filter(product => product.colors.includes(searchColor));

// const products = [
//     {
//         id: 101,
//         title: "LED",
//         colors: ['black', 'gray', 'gold']
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         colors: ['green', 'red', 'black']
//     },
//     {
//         id: 103,
//         title: "Laptop",
//         colors: ['pink', 'brown', 'gray']
//     }
// ]


// let searchColor = 'black';

// const updatedProducts = products.filter(product => product.colors.includes(searchColor));

// const updatedProducts = products.filter(product => {
//     const result = product.colors.find(c => c === searchColor)

//     console.log(result)

//     return result
// });

// const updatedProducts = products.filter(product => {

//     let colorMatch = false;

//     for (let i = 0; i < product.colors.length; i++) {
//         if (searchColor == product.colors[i]) {
//             colorMatch = true;
//         }
//     }

//     return colorMatch

// });

// console.log(updatedProducts)



