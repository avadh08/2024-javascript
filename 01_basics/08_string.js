let name = "avadh"
let age = 19

console.log(`hello my name is ${name} and my age is ${age}`)  //string interpolation

// another way to declare string.

let eName = new String('avadh borda')  

console.log(eName[0])  // string key value access
console.log(eName.__proto__)

// string functions & methods

console.log(eName.length)
console.log(eName.toLocaleUpperCase())
console.log(eName.charAt(4))
console.log(eName.indexOf('d'))

const newString = name.substring(0, 4)  // here we can't give negative parameter to the substring
console.log(newString)

const anotherString = name.slice(-2, 4)  // here we can give negative parameter to string slice 
console.log(anotherString)

const string = "     avadh.      "
console.log(string)
console.log(string.trim())

const url = "https://avadh.com/avadh%40borda"
console.log(url.replace('%40', '-'))
console.log(url.includes('avadh'))
console.log(url.includes('mira'))

const example = "this is the example of the split"
console.log(example.split(' '))