// Your task:
// 1. Import function "getUserListFromApi" from module "4.async.helpers.js"
// 2. Use function "getUserListFromApi" to get user list
// 3. Print on console first element from user list


// to test your solution in terminal You can run following command:
// npm run es3e4

//// TODO:
// here place your solution:

import { getUserListFromApi } from "./4.async.helpers.js";

const userListFromAsync =  await getUserListFromApi()

console.log(userListFromAsync[0])






// import { getUserListFromApi } from "./4.async.helpers.js";

// const userList =  getUserListFromApi()

// console.log(userList[0])















//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!



// Expected output:
// { name: 'Dale Cooper', age: 40 }