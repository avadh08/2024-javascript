function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 3000))

const user = {
    username : "avadh borda",
    price : 999
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 499
})

// for array

const myArray = [100, 200, 300, 400]

function secondValue(getArray){
    return getArray[1]
}

// console.log(secondValue(myArray))

console.log(secondValue([100, 200, 300, 400]))