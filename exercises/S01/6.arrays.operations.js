// Your task:
// 1. Create new array with 3 elements: 'abc', 'def' and 'gh'
// 2. Add new element to array: 'xyz'
// 3. Print on console whole array
// 4. Concat (join) your array with new one: [1, 2, 3]
// 5. Print on console new array
// 6. Replace third ([2]) item in array with new value '555'
// 7. Print on console new array

// to test your solution in terminal You can run following command:
// npm run es1e6

//// TODO:
// here place your solution:

//1
let startArray = ['abc', 'def', 'gh']
//2
startArray.push('xyz')
//3
console.log(startArray)
//4
let secondArray = [1, 2, 3]
let bigArray = startArray.concat(secondArray)
//5
console.log(bigArray)
//6
bigArray[2] = 555
//7
console.log(bigArray)







// // 1
// let arrayOfStrings = ['abc', 'def', 'gh']
// arrayOfStrings.push('xyz')
// console.log(arrayOfStrings)
// let arrayOfNumbers = [1, 2, 3]
// let arrayAllElements = arrayOfStrings.concat(arrayOfNumbers)
// console.log(arrayAllElements)
// arrayAllElements[2] = 555
// console.log(arrayAllElements)








//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// On console You should get:
// ['abc', 'def', 'gh', 'xyz']
// ['abc', 'def', 'gh', 'xyz', 1, 2, 3]
// ['abc', 'def', '555', 'xyz', 1, 2, 3]