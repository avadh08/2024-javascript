const name = ["avadh", "mira", "alpesh", "asmita"]

const n1 = name.forEach( (item) => { 
      console.log(item)
      return item
})

console.log(n1)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const num = myNums.filter( (item) => item > 5)
// console.log(num)

// const num = myNums.filter( (item) => {
//       return item > 5
// })
// console.log(num);

const newNums = []

myNums.forEach( (num) => {
      if (num > 5) {
            newNums.push(num)
      }
})

console.log(newNums)
