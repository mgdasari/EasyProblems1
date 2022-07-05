const readline = require("readline-sync");

//Readline-sync help script to interact with the user input
console.log("Please enter hello world ");
let b = readline.question();

console.log("a = " + b);
console.log("Please provide lenght of array : ");
let a = Number(readline.question());
let number = [];
console.log("Please enter the numbers : ");
for (let i = 0; i < a; ++i) {
    number.push(Number(readline.question()));
}
console.log(number);