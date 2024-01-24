// const - which hold value that can't change their value
// var - which hold value that can change 
// let - we use mostly let which very similar to var

const accountId = 10                                            /* prefer not use var because
var employeeName = "avadh borda"                                         of issue in          
let userName = "mira borda"                                     block scope & functional scope */                    

// accountId = 20  -  this not allowed.
employeeName = "aplesh borda"  // here var chane the value
userName = "asmita borda"  // here let change the value

/*
console.log(accountId);
console.log(employeeName);
console.log(userName);
*/

// console table

console.table([accountId, employeeName, userName])