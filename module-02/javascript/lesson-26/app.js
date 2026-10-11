let colors = ['red', 'green', 'black', 'gold', 'red', 'green', 'brown'];

// {
//     red: 2,
//     green: 2,
//     black: 1,
//     gold: 1
// }

let colorCount = {};

for (let i = 0; i < colors.length; i++) {

    const color = colors[i]
    colorCount[color] = (colorCount[color] || 0) + 1
    // if (colorCount[colors[i]]) {
    //     colorCount[colors[i]] = colorCount[colors[i]] + 1
    // } else {
    //     colorCount[colors[i]] = 1
    // }

}

console.log(colorCount)


// --------------------------------

// let colorCount = {
//     red: 1,
//     green: 2,
//     1: 2,
//     "full name": 'Muhammad Ali'
// };


// console.log(colorCount.red)

// console.log(colorCount['red'])
// console.log(colorCount['1'])
// console.log(colorCount['full name'])

// console.log(colorCount.1)
// console.log(colorCount."full name")




// let colorCount = colors.reduce((acc, color) => (acc[color] = (acc[color] || 0) + 1, acc), {});
// let colorCount = colors.reduce((acc, color) => {
//     acc[color] = (acc[color] || 0) + 1;
//     return acc;
// }, {});
// let cartItems = [
//     { product: "Burger", price: 500, quantity: 2 },
//     { product: "Pizza", price: 1000, quantity: 1 },
//     { product: "Shawarma", price: 700, quantity: 1 },
// ];

// let grandTotal = cartItems.reduce((acc, current) => acc + current.price * current.quantity, 0)

// let grandTotal = cartItems.reduce((acc, current) => {
//     return acc + current.price * current.quantity
// }, 0)

// console.log(grandTotal)


// let prices = [100, 200, 500, 200];

// let total = prices.reduce((acc, current) => acc + current, 0)

// let total = prices.reduce((acc, current) => {
//     return acc + current;
// }, 0)

// console.log(total)


// let sum = 0;

// for (let i = 0; i < prices.length; i++) {
//     sum += prices[i]
// }

// console.log(sum)