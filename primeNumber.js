//Write a program that prints all prime numbers.

const readline = require("readline-sync");

console.log("Please provide a number till which prime number needs to be calculated");

const input = Number(readline.question());

/*

1 = p
2 = p
3 = p
4 = np
5 = p


*/

for(let i =1;i<input;i++){
    if(isPrime(i)){
        console.log(i);
    }
};

function isPrime(n){

    if(n ==0 || n ==1){return false}  // 0 and 1 is not a prime number
    for (let i = 2; i<n;i++){
        if(n%i==0){return false}
    }

return true
}