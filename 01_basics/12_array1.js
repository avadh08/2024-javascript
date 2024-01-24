const marvel_Heros = ["thor", "ironman", "spiderman"]
const dc_Heros = ["superman", "batman", "aquaman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][2])

const all_Heros = marvel_Heros.concat(dc_Heros)
console.log(all_Heros)

const all_New_Heros = [...marvel_Heros, ...dc_Heros]
console.log(all_New_Heros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("avadh"))
console.log(Array.from("avadh"))
console.log(Array.from({name : 'avadh'}))  // intresting example.

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2))