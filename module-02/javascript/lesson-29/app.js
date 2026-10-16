let p1 = {
    id: 101,
    title: 'Laptop',
    price: 2000,
    quantity: 4,
}

const { title, ...rest } = p1;

console.log(title, rest)



// Destructuring
// let numbers = [10, 20, 30];


// let x = numbers[0];
// let y = numbers[1];

// numbers[0] = 100;

// console.log(x)
// console.log(y)
// let [x, y] = numbers;
// numbers[0] = 100;

// // x = 30;

// console.log(x, y);

// let [x, , y] = numbers;

// x = 40;
// console.log(x, y)

// console.log(numbers)

// let x = numbers[0];
// let y = numbers[1];

// x = 40;
// console.log(x)
// console.log(y)

// let p1 = {
//     id: 101,
//     title: 'Laptop',
//     price: 2000,
//     quantity: 4,
// }

// const { title, price, quantity: qty } = p1;

// console.log(quantity); // ??
// console.log(qty); // ??

// console.log(title, price)


// let p1 = {
//     id: 101,
//     title: 'Laptop',
//     price: 2000,
//     quantity: 4,
// }

// const { title, price, quantity, stock } = p1;


// // let title = p1.title;
// // let price = p1.price;
// // let quantity = p1.quantity;


// console.log(title, price, quantity)
// console.log(stock)






// -------------------------------------------------
// Spread

// let p1 = {
//     id: 101,
//     title: 'Laptop',
//     price: 2000,
//     quantity: 4
// }


// let p2 = { ...p1 };

// p2.id = 102

// console.log(p1)
// console.log(p2)



// let arr = [10, 20, 30];
// let arr2 = [...arr];

// arr2[0] = 100;

// console.log(arr)
// console.log(arr2)


// let arr2 = [arr[0], arr[1], arr[2]];

// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i])
// }

// arr2[0] = 100;


// console.log(arr)
// console.log(arr2)


// let arr = [10, 20, 30];
// let arr2 = arr;


// arr2[0] = 100;

// console.log(arr)
// console.log(arr2)









// map, filter, sort, reduce, find, findIdex
// Destructuring and the Spread/Rest operator