// objects de-structure.

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}

// const {courseInstructor} = course
const {courseInstructor : instructor} = course  // we can also change the name of objects value

console.log(instructor)




 
