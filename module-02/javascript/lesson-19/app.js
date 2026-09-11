// The main function
function greet(name, callback) {
    console.log("Hello " + name);
    callback(name); // Run the callback
}

// The callback function
function sayGoodbye(name) {
    console.log("Goodbye!" + name);
}

greet("Ali", sayGoodbye)


// -------------------------------------------------------------
// function fn(x) {
//     console.log("Main function")

//     x()
// }


// function cb() {
//     console.log("Callback funtion !")
// }

// fn(cb)




// const button = document.querySelector("button")

// function changeBg() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);

//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }


button.addEventListener('dblclick', changeBg)








// ------------------------------------------------------------
// const button = document.querySelector("button")

// function changeBg() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);


//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }

// function changeBgOnHover() {
//     document.body.style.backgroundColor = "green"
// }

// button.onclick = changeBg

// console.log(button.onclick)

// changeBg()