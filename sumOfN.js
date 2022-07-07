const readline = require("readline-sync");

let sum = 0;


console.log("Please enter number");

let input = Number(readline.question());

if (input && input != 0) {
    for (let i = 0; i <= input; i++) {
        sum = sum + i
    }
    console.log("sum of n number " + sum);
} else {
    console.log("Please  enter the number")
}

