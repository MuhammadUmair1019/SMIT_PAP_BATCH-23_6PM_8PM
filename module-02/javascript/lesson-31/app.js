const getData = (url) => {

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(JSON.parse(request.responseText))
            console.log('-----------------------------------------')
        } else if (request.readyState === 4) {
            console.log("Could not found the resource!")
        }

    })

    request.open("GET", url);
    request.send();
}

getData('https://jsonplaceholder.typicode.com/users')



// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText)
//     } else if (request.readyState === 4) {
//         console.log("Could not found the resource!")
//     }

// })

// request.open("GET", 'https://jsonplaceholder.typicode.com/users');
// request.send();










// ----------------------

// console.log("start");

// setTimeout(() => {
//     console.log("Timeout!")
// }, 3000)

// console.log("end")

// -------------
// console.log("start");

// for (let i = 0; i < 1000; i++) {
//     console.log(i)
// }

// console.log("end")
