// array

const arr = [0, 1, 2, 3, 4, 5]
const arr1 = new Array("avadh", "yash", "anish", "raj")

console.log(arr[0])
console.log(arr1[3])

// array methods.

arr.push(6)
arr.push(7)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(9))
console.log(arr.indexOf(3))

const myArr = arr1.join()
console.log(arr1)
console.log(typeof (myArr))

// slice, splice

console.log(arr.slice(1, 3))
console.log(arr.splice(1, 3))