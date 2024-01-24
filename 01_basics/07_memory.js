// there are 2 type of memory.

// stack:
/* all primtitive data type
   1.string
   2.number
   3.null
   4.undefined
   5.boolean
   6.symbol
   7.BigInt
*/

// heap:
/* all non-primtive data type
   1.array
   2.object
   3.function
*/      

// examples(stack) - it provides a copy of variable value.

let name = "avadh"
let anotherName = name
anotherName = "borda"

console.log(name)
console.log(anotherName)

// examples(heap) - it provides a refference of the variable value.

let user = {
    eName : "avadh",
    upiId : "avadhborda458@okhdfcbank"
}

let anotherUser = user
anotherUser.upiId = "bordaavadh@oksbi"

console.log(user)
console.log(anotherUser)