// define numbers and cmethods

const balance = 400.89

const number = new Number(400)
console.log(number)

console.log(balance.toString())
console.log(typeof (balance))

console.log(balance.toFixed(2))

console.log(balance.toPrecision(3))

const anotherNumber = 2000000
console.log(anotherNumber.toLocaleString())
console.log(anotherNumber.toLocaleString('en-IN'))

// maths

console.log(Math)
console.log(Math.abs(-99))
console.log(Math.round(69.4))
console.log(Math.ceil(76.3))
console.log(Math.floor(56.7))
console.log(Math.min(2, 4, 6, 8, 10))
console.log(Math.max(2, 4, 6, 8, 10))

// math.random - range 0 to 1

console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // logic for ludo. - most important


