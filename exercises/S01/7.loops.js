// Your task:
// 1. Write body of function 'elementChecker'
// 2. Inside this function iterate through elements from an array
// 3. print each element on console

// to test your solution in terminal You can run following command:
// npm run es1e7

//// TODO:
// here place your solution:


function elementChecker(anArray) {
        for(let index = 0; index < anArray.length; index++){
          
        console.log(anArray[index])
    }

    // anArray.forEach(element => {
    //     console.log(element)
    // });
}










//Rozwiązanie Pętla For
// function elementChecker(anArray) {
     

//     for(let index = 0; index < anArray.length; index++) {
//         // const user = anArray[index]
//         // console.log(user)

//         console.log(anArray[index] )
//     }

//         //Rozwiązanie Pętla Foreach

//         anArray.forEach(element => {
//             console.log(element)
//         });
// }




//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

elementChecker([1, 2, 'test'])

// Expected output:
// Expected output of this script is following info on console:
// 1
// 2
// test