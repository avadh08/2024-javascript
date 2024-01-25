const coding = ["html", "css", "javascript", "react", "next"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
} )

const myCoding = [
    {
        name : 'avadh',
        age : 18
    },
    {
        name : 'mira',
        age : 20
    },
    {
        name : 'yash',
        age : 18
    }]

myCoding.forEach( (item) => {
    console.log(item.name);
})