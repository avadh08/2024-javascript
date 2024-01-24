// for (let i = 0; i < 10; i++) {
//     console.log(i)
    
// }

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value ${j} and outer loop value ${i}`)
    }
}

// let myArray = ["batman", "superman", "antman"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        // break
        continue
    }
    console.log(`value od i is ${index}`);
    
}