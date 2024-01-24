const userEmail = "a@avadh.ai"

if(userEmail){
    console.log("got the email");
}
else{
    console.log("don't have an email");
}

// falsy value - 0, -0, false, BigInt, 0n, null, undefined, NaN

// truthy value - "0", 'false', " ", [], {}, function(){}

const userName = []

if(userName.length === 0){
    console.log("array is empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// ternary operator

// condition ? true : false

const iceteaPrice = 100

iceteaPrice > 80 ? console.log("more than 80") : console.log("less than 80")