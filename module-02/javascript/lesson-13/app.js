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



let modifiedProducts = [];

for (let i = 0; i < products.length; i++) {
    let product = products[i]
    modifiedProducts.push({ id: product.id, title: product.title, price: product.price })
}

console.log(modifiedProducts)

// let titles = [];

// for (let i = 0; i < products.length; i++) {
//     titles.push(products[i].title)
// }

// console.log(titles)


function countReviews(product) {
    let totalReviews = product.reviews.length;

    return totalReviews
}

function averageRating(product) {
    let sum = 0;

    for (let i = 0; i < product.reviews.length; i++) {
        sum += product.reviews[i].rating;
    }

    return sum / product.reviews.length;
}

function display(products) {
    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        console.log(`Product ${product.id} = ${averageRating(product)}(${countReviews(product)})`)
    }
}
