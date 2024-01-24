const user = {
    name : "avadh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()

user.name = "avadh borda"

user.welcomeMessage()

console.log(this)

// we can't use this keyword in the function.

// function chai(){
//     const userName = "avadh"
//     console.log(this.userName);
// }

// const chai = () => {
//     const userName = "borda"
//     console.log(this.userName);
// }

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 6))

// implicit return

const addThree = (num1, num2, num3) => num1 + num2 + num3;

console.log(addThree(3, 5, 8))
