// functions in javaScript.

function sayMyName(){
    console.log("avadh")
}
// sayMyName - refference.
// sayMyName() - execution.

// function addTwoNumbers(number1, number2){  -  here(number1, number2) this are called parameter.
//     console.log(number1 +number2)
// }

// addTwoNumbers(3, 6) - here(3, 6) this are called arguments.

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result

    // return number1 + number2 - we can also define the sum of ton number like this....
}

const Result = addTwoNumbers(3, 6)
console.log("result : ",Result)

// another type of function parameter declaration.

function loginUserMessage(username){    // if we define parameter like that (username = "sam") and if we can't enter the user name then by default user name value is sam.
    if(username === undefined){
        console.log("please enter your username")
        return
    }
    return `${username} is just logged in`
}

console.log(loginUserMessage("avadh"))
console.log(loginUserMessage())
