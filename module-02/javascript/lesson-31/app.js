const fetchData = (url) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Could not found the resource!")
            }
        })

        request.open("GET", url);
        request.send();
    })

}

fetchData('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log(data)
        return fetchData('https://jsonplaceholder.typicode.com/posts')
    }).then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))


// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // resolve("Success")
//         reject("Reject")
//     })
// };

// getSomething().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         resolve("Success")
//     })
// };

// let result = getSomething()

// console.log(result)


// ---------------------------------------------------------------
// const fetchData = (url, cb) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             cb(undefined, data)
//         } else if (request.readyState === 4) {
//             cb("Could not found the resource!", undefined)
//         }
//     })

//     request.open("GET", url);
//     request.send();

// }

// fetchData('https://jsonplaceholder.typicode.com/users', (err, data) => {
//     console.log("**** users data *****")
//     console.log(data)
//     fetchData('https://jsonplaceholder.typicode.com/posts', (err, data) => {
//         console.log("**** posts data *****")
//         console.log(data)
//         fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//             console.log("**** comments data *****")
//             console.log(data)
//             fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//                 console.log("**** comments data *****")
//                 console.log(data)
//             })
//         })
//     })
// })

// ---------------------------------------------------------------------
// const fetchData = (url, cb) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             cb(undefined, data)
//         } else if (request.readyState === 4) {
//             cb("Could not found the resource!", undefined)
//         }
//     })

//     request.open("GET", url);
//     request.send();

// }

// fetchData('https://jsonplaceholder.typicode.com/users', (err, data) => {
//     console.log("**** users data *****")
//     console.log(data)
//     fetchData('https://jsonplaceholder.typicode.com/posts', (err, data) => {
//         console.log("**** posts data *****")
//         console.log(data)
//         fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//             console.log("**** comments data *****")
//             console.log(data)
//             fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//                 console.log("**** comments data *****")
//                 console.log(data)
//             })
//         })
//     })
// })

// ----------------------------------------------------------------
// const fetchData = (url, cb) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             cb(undefined, data)
//         } else if (request.readyState === 4) {
//             cb("Could not found the resource!", undefined)
//         }
//     })

//     request.open("GET", url);
//     request.send();

// }

// fetchData('https://jsonplaceholder.typicode.com/users', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("**** users data *****")
//         console.log(data)
//     }

// })

// fetchData('https://jsonplaceholder.typicode.com/posts', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("**** posts data *****")
//         console.log(data)
//     }
// })

// fetchData('https://jsonplaceholder.typicode.com/comments', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("**** comments data *****")
//         console.log(data)
//     }
// })


// ----------------------------------------------------------------------
// const getData = (url) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(JSON.parse(request.responseText))
//             console.log('-----------------------------------------')
//         } else if (request.readyState === 4) {
//             console.log("Could not found the resource!")
//         }


//     })

//     request.open("GET", url);
//     request.send();

// }

// getData('https://jsonplaceholder.typicode.com/users')



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
