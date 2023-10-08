// Your task:
// 1. Create new function with three string parameters where one is optional with default value '!'
// 2. Inside this function concat (join) all parameters values with space between values
// 3. Function must return the result of joining string
// 4. Print the result using console.log
// 5. Create readable names for variables and function

// to test your solution in terminal You can run following command:
// npm run es1e4


//// TODO:
// here place your solution:


function threeStringParam(value1, value2, value3='!') {
    return `${value1} ${value2} ${value3}`
}

const result = threeStringParam('Hello', 'World')
console.log(result)









// function invitation(stringOne, stringTwo, stringThree="!"){
//     const result = stringOne + " " + stringTwo + " " + stringThree
    
//     return result
// }

// const results1 = invitation('Hello', 'World')
// console.log('This is my connected strings:', results1)








//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// After passing values 'Hello' and 'World' as a result on console You should display:
// Hello World !