// Your task:
// 1. Write code to create a text file called "ex3.txt" in current directory
// 2. Write text: "Hello jaktestowac.pl!" to file "ex3.txt"
// 3. Write code to read content of created file "ex3.txt"
// 4. Display content of that file on console.


// to test your solution in terminal You can run following command:
// npm run es3e3

//// TODO:
// here place your solution:


import { readFileSync, writeFileSync } from "fs";


const cat = "Helko, plik ex3 został stworzony przez funkcję writeFileSync i też tu mogę zmieniać jego tekst.Zmiana następuje po uruchomieniu terminala"

writeFileSync('exercises/S03/ex3.txt', cat)

const catAsUtf8 = readFileSync('exercises/S03/ex3.txt', {encoding:'utf8'})
console.log(catAsUtf8)



 





// import { readFileSync, writeFileSync } from 'fs'

// let sampleData = "Hello jaktestowac.pl!"
// writeFileSync('exercises/S03/ex3.txt', sampleData)

// const dataFromFileAsUtf8 = readFileSync('exercises/S03/ex3.txt', {encoding:'utf8'})
// console.log(dataFromFileAsUtf8)












//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!


// Expected output:
// Hello jaktestowac.pl!