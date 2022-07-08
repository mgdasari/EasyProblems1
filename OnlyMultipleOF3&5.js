// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
const readline = require("readline-sync");

console.log("Please enter the number");

const input = Number(readline.question());
let sum = 0;
let result = 0;
if (input != 0) {
  for (let i = 0; i <= input; i++) {
    if (sum % 3 == 0 || sum % 5 == 0) {
      result = result + sum;
    }
    ++sum;
  }
  console.log("Final sum " + result);
} else {
  console.log("Please enter number");
}
