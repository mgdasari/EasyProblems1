const readline = require("readline-sync");
// readline-sync help script to interact with user
console.log("Please enter ur name");

const a = readline.question();

if(a.toLocaleLowerCase() == "bob" || a.toLocaleLowerCase() == "alice"){
    console.log(`Good morning ${a}`);
}
else
    console.log(`Not a valid user`);

;