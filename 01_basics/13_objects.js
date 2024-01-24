// sinleton - constructors

// Object.create - its a constructor method(singleton)

// define symbol

const mySym = Symbol("key1")

// object literals

const jsUser = {
    name : 'avadh',
    age : 19,
    location : 'surat',
    [mySym] : 'myKey1',
    email : 'avadhborda458@gmail.com',
    lastLoginDay : ["sunday", "monday", "saturday"]
}
// Object.freeze(jsUser) - freeze the object

// access object

console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser[mySym])

// change email value

jsUser.email = "bordaavadh@gmail.com"

console.log(jsUser["email"])
console.log(jsUser)

// functions in objects

jsUser.greeting = function(){
    console.log("hello JS user")
}

console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`)
}

console.log(jsUser.greetingTwo())

