// dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleDateString())

let anotherDate = new Date(2023, 0, 23)  // here month starts with index number 0.
console.log(anotherDate.toDateString())

let thisDate = new Date("2023-01-23")
console.log(thisDate.toLocaleString())

// time

let myTimeStamps = Date.now()
console.log(myTimeStamps)
console.log(thisDate.getTime())
console.log(Math.floor(Date.now()/1000))

let date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getMilliseconds())
console.log(date.getMinutes()) 
console.log(date.getDay())