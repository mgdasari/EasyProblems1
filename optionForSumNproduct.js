//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

const readline = require("readline-sync");

console.log("Please Enter the number");

const input = Number(readline.question());

console.log("1 for sum and 2 for multiplication");

const operator =  Number(readline.question());


switch(operator){
    case 1 : 
    let sum =0
    for(let i=0;i<=input;i++){
        sum = sum +i
    }
    console.log("result :" + sum);
    break

    case 2 : let sum1 = 1
        for(let i=1;i<input;i++){
            sum1 = sum1 * i
        }
        console.log("result :" + sum1);
        break

    default : console.log("Please enter the number");
}


