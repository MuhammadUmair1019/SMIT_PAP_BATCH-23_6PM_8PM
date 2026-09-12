const ul = document.querySelector("ul");
const addTodo = document.querySelector("button");

// const list = ul.children;

ul.addEventListener("click", function (e) {
    if (e.target.nodeName === 'LI') {
        e.target.style.textDecoration = "line-through"
    }
})

// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function () {
//         list[i].style.textDecoration = "line-through"
//     })
// }

addTodo.addEventListener("click", function () {
    console.log("Click")

    let li = document.createElement("li");

    li.textContent = 'Item 4';


    // ul.innerHTML = ul.innerHTML + `<li> Item 4 </li>`;

    ul.appendChild(li)


})




// --------------------------------------------------------------
// const grandparent = document.querySelector("#grandparent");
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");



// // event bubbling

// grandparent.addEventListener("click", function (e) {
//     console.log(e.target)
//     console.log("Grandparent click!")
// })
// document.body.addEventListener("click", function () {
//     console.log("Body click!")
// })

// grandparent.addEventListener("click", function () {
//     console.log("Grandparent click!")
// })

// parent.addEventListener("click", function () {
//     console.log("Parent click!")
// })

// child.addEventListener("click", function (e) {
//     e.stopPropagation()

//     console.log(e)
//     console.log("Child click!")
// })



// event capturing
// document.body.addEventListener("click", function () {
//     console.log("Body click!")
// }, true)

// grandparent.addEventListener("click", function () {
//     console.log("Grandparent click!")
// }, true)

// parent.addEventListener("click", function () {
//     console.log("Parent click!")
// }, true)

// child.addEventListener("click", function () {
//     console.log("Child click!")
// }, true)





// ----------------------------------------------------------------
// const ul = document.querySelector("ul");
// const addTodo = document.querySelector("button");

// const list = ul.children;

// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function () {
//         list[i].style.textDecoration = "line-through"
//     })
// }

// addTodo.addEventListener("click", function () {
//     console.log("Click")

//     let li = document.createElement("li");

//     li.textContent = 'Item 4';


//     // ul.innerHTML = ul.innerHTML + `<li> Item 4 </li>`;

//     ul.appendChild(li)


// })

// console.log(list)

// ---------------------------------------------------------------
// function greet(name, callback) {
//     console.log(`Welcome ${name}`)


//     callback()
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// console.log(sayGoodbye)

// greet("Ali", function () {
//     console.log("Goodbye!");
// })


















// // The main function
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback(name); // Run the callback
// }

// // The callback function
// function sayGoodbye(name) {
//     console.log("Goodbye!" + name);
// }

// greet("Ali", sayGoodbye)






