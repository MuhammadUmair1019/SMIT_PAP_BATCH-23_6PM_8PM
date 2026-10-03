const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobile",
        price: 250000,
        stock: 10,
        brand: "Apple",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "Mobile",
        price: 220000,
        stock: 0,
        brand: "Samsung",
        rating: 4.6,
    },
    {
        id: 3,
        name: "MacBook Air M3",
        category: "Laptop",
        price: 350000,
        stock: 5,
        brand: "Apple",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "Laptop",
        price: 280000,
        stock: 3,
        brand: "Dell",
        rating: 4.5,
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "Accessories",
        price: 65000,
        stock: 15,
        brand: "Apple",
        rating: 4.7,
    },
    {
        id: 6,
        name: "Galaxy Buds",
        category: "Accessories",
        price: 35000,
        stock: 0,
        brand: "Samsung",
        rating: 4.3,
    },
    {
        id: 7,
        name: "HP Pavilion",
        category: "Laptop",
        price: 180000,
        stock: 7,
        brand: "HP",
        rating: 4.2,
    },
    {
        id: 8,
        name: "Samsung A55",
        category: "Mobile",
        price: 120000,
        stock: 12,
        brand: "Samsung",
        rating: 4.4,
    },
];


const allProducts = products.filter(product => product.category === "Laptop").map(product => product.name)
console.log(allProducts)


// const availableProducts = products.filter(product => (product.price < 200000 && product.stock > 0))

// console.log(availableProducts)

// ### 5. Available Products — `filter()`

// Return only products where:
// stock > 0

// const availableProducts = products.filter(product => product.stock > 0)

// console.log(availableProducts)


// 4. Add Discount — map()
// Create a new array of product objects and add a `discountedPrice` property with a **10% discount**.

// Do **not** modify the original objects.

// **Expected output shape:**


// const updatedProducts = products.map(product => {
//     product.discountedPrice = product.price * 0.90;

//     return product
// });

// console.log(updatedProducts)


// 3. Formatted Products — map()

// Return each product in this format:

// const formattedProducts = products.map(product => `${product.name} - ${product.price}`)

// console.log(formattedProducts)