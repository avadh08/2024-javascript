// singleton

const jsUser = new Object()
// const jsUser = {}

jsUser.id = "123abc"
jsUser.name = "avadh"
jsUser.age = 19

const newUser = {
    email : "something@gmail.com",
    fullName : {
        firstName : "avadh",
        lastName : "borda"
    }
}

console.log(newUser.fullName)
console.log(newUser.fullName.firstName)

// combine two objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const array = [
    {
        id : 1,
        name : "avadh"
    },
    {
        id : 2,
        name : "yash"
    },
    {
        id : 3,
        name : "anish"
    }
]

console.log(array[1].name)

console.log(Object.keys(jsUser))
console.log(Object.values(jsUser))
console.log(Object.entries(jsUser))

console.log(jsUser.hasOwnProperty('age'))