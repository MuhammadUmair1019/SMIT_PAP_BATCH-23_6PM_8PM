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

for (var i = 0; i < products.length; i++) {
    const product = products[i]
    var reviewsCount = product.reviews.length;
    var totalReviews = 0;

    for (var j = 0; j < product.reviews.length; j++) {
        totalReviews += product.reviews[j].rating
    }

    var avgRating = totalReviews / reviewsCount;


    console.log(`Product ${product.id} = ${avgRating}(${reviewsCount})`)
}


// -----------------------------------------------
// var products = [
//     {
//         id: 101,
//         title: "Airpod",
//         description: "Best Airpod",
//         price: 1000,
//         variations: [
//             { color: "blue", quantity: 3 },
//             { color: "black", quantity: 2 },
//             { color: "white", quantity: 1 },
//         ]
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         description: "Best Mobile",
//         price: 3000,
//         variations: [
//             { color: "gold", quantity: 5 },
//             { color: "blue", quantity: 2 },
//             { color: "white", quantity: 4 },
//         ]
//     },
// ]

// product 101 = 4.2(4)
// product 102 = 3.6(3)



// var product = {
//     id: 101,
//     title: "Airpod",
//     description: "Best Airpod",
//     price: 1000,
//     quantity: 10,
//     variations: [
//         { color: "blue", quantity: 3 },
//         { color: "black", quantity: 2 },
//         { color: "white", quantity: 1 },
//     ],
//     reviews: [
//         {
//             id: 110,
//             comment: "very good product",
//             rating: 4.5,
//             date: '02/08/2026',
//             status: true
//         },
//         {
//             id: 112,
//             comment: "bad product",
//             rating: 2.5,
//             date: '02/08/2026',
//             status: false
//         },
//         {
//             id: 113,
//             comment: "good product",
//             rating: 4.0,
//             date: '02/08/2026',
//             status: true
//         },
//     ]
// }


// var sum = 0;

// for (var i = 0; i < product.reviews.length; i++) {
//     // sum = sum + product.reviews[i].rating
//     sum += product.reviews[i].rating
// }

// var avgRating = sum / product.reviews.length;

// console.log("Product " + product.id + " = " + avgRating + "(" + product.reviews.length + ")")

// console.log(`Product ${product.id} = ${avgRating}(${product.reviews.length})`)

// console.log(`Product ${product.id} = ${avgRating}(${product.reviews.length})`)
// console.log("avgRating ", avgRating)

// console.log("total reviews:", product.reviews.length)

// for (var i = 0; i < product.reviews.length; i++) {
//     if (product.reviews[i].status) {
//         console.log(product.reviews[i])
//     }
// }



// console.log(product)
// console.log(product.price)
// console.log(product.variations[2].quantity)
