const userOne = {
    name: "Ahmed",
    email: "ahmed@gmail.com",
    login: function () {
        console.log("Login!");
    },
    logout: function () {
        console.log("Logout!");
    },
};


function createUser(name, email) {
    let user = {}
    user.name = name;
    user.email = email;
    user.login = function () {
        console.log("Login!");
    };
    user.logout = function () {
        console.log("Logout!");
    };

    return user
}

const userOne_ = createUser('Zubair', 'zubair@gmail.com');

console.log(userOne_)


// const userOne = {
//     name: "Ali",
//     age: 20,
//     login: () => {
//         console.log(this)
//         console.log("Login!")
//     }
// }

// userOne.login.call(userOne)

// userOne.login()
// console.log(userOne)


// ---------------------------------------------------
// function login(x, y) {
//     console.log(x, y)
//     console.log(`${this.name} has been logged in`)
// }

// function logout() {
//     console.log(`${this.name} Logout!`)
// }


// const userOne = {
//     name: "Ali",
//     age: 20,
//     login,
//     logout
// }

// const userTwo = {
//     name: "Ahmed",
//     age: 22,
//     login,
//     logout
// }

// login.call(userOne, 2, 4)
// login.apply(userTwo, [2, 4])

// let bFn = login.bind(userOne, 4, 5)

// console.log(bFn)
// bFn()

// function login() {
//     console.log('curr ->', this)
//     console.log(`${this.name} has been logged in`)
// }

// function logout() {
//     console.log(`${this.name} Logout!`)
// }


// const userOne = {
//     name: "Ali",
//     age: 20,
//     login,
//     logout
// }

// const userTwo = {
//     name: "Ahmed",
//     age: 22,
//     login,
//     logout
// }

// userOne.login.call(userTwo)

// console.log(window)
// userOne.login()
// userTwo.login()
// console.log(userOne)



// login()
// login.call(userOne)
// login.call(userTwo)

// ------------------------------------------------------------------------------
// function login() {
//     console.log(`${this.name} has been logged in`)
// }

// function logout() {
//     console.log(`${this.name} Logout!`)
// }


// const userOne = {
//     name: "Ali",
//     age: 20,
//     login: login,
//     logout: logout
// }

// const userTwo = {
//     name: "Ahmed",
//     age: 22,
//     login: function () {
//         console.log(`${this.name} has been logged in`)
//     },
//     logout: function () {
//         console.log("Logout")
//     }
// }

// // console.log(this)
// // console.log(window)
// userOne.login()
// userTwo.login()
// // console.log(userOne)