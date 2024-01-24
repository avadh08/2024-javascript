// primtive data type.

// 1.string
// 2.number
// 3.null
// 4.boolean
// 5.undefined
// 6.symbol
// 7.BigInt

// reffernce data type (non-primitive).

// 1.array
// 2.object
// 3.function

// examples.

// symbol

const id = Symbol('123')                           /* in this data type give uniqueness to
                                                            variable value */
const anotherId = Symbol('123')                              

if(id == anotherId){
    console.log("True")
}
else{
    console.log("False")
}

//array

let heros = ["thor", "ironman", "batman", "aquaman"]

//object

let myObj =
{
    name : "avadh",
    age : 19,
    sex : "male"
}

//function declare as variable

const myFucntion = function(){
    console.log("hello world!");
}