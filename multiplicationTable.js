//Write a program that prints a multiplication table for numbers up to 12.

const readline = require("readline-sync");

console.log("Please inter the table less then 12 you want to print ");

let input = Number(readline.question());

if (input <= 12) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${input} ` + "* " + i + " = " + input * i);
  }
} else {
  console.log("Number should be less then 12");
}
