// Your task:
// 1. Create three new variables, first with value 'integration tests', second with value 'passed' and third - 'failed'
// 2. Print on console result of adding all string variables with spaces between
// 3. Use template literals and declared variables to print on console 'integration tests: failed'
// 4. Use template literals and declared variables to print on console 'integration tests: passed'

// to test your solution in terminal You can run following command:
// npm run es1e2

//// TODO:
// here place your solution:


let first = 'integration tests'
let second = 'passed'
let third =  'failed'

let textWithSpace = first + ' ' + second + ' ' + third
console.log(textWithSpace)

let textTemplateLiteralFailed = `${first}: ${third}`
let textTemplateLiteralPassed = `${first}: ${second}`

console.log(textTemplateLiteralFailed)
console.log(textTemplateLiteralPassed)







// let first = 'integration tests'
// let second = 'passed'
// let third = 'failed'

// console.log(first + ' ' + second + ' ' + third)

// console.log(`${first}: ${third}`)
// console.log(`${first}: ${second}`)


//My solution

// let threeWithSpace = first + ' ' + second + ' ' + third

// let failed = first + ': ' + third
// let passed = first + ': ' + second

// console.log(`threeWithSpace: ${threeWithSpace}`)
// console.log(threeWithSpace)

// console.log(failed)
// console.log(passed)






//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// After running this script on console You should display:
// integration tests failed passed
// integration tests: failed
// integration tests: passed
