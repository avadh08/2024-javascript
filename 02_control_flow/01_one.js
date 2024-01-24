// const isUserLoggedIn = true
// const temprature = 40

// if(temprature <50){
//     console.log("its very hot day")
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }

const isUserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitcard){
    console.log("you can purchase this course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("you able to logged in this website");
}