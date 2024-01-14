const input = require('readline-sync');
let str = "LaunchCode";

// 1) Use string methods to remove first 3 characters from string & add them to end.
// Either: new variable = the new string
// Or: reassign the new string to str

let arr = str.split(""); // convert str into array of letters
console.log("arr:", arr);

let first3 = arr.splice(0,3); // store & remove first three letters from arr
console.log("first3:", first3);
console.log("arr:", arr);

arr = arr.concat(first3); // concat first3 to the end of arr
console.log("arr concat first3:", arr);

let newStr = arr.join(""); // convert arr into string & assign to newStr
console.log("newStr:", newStr);

// Use template literal to log the original and modified string in a descriptive phrase

console.log(`The original string was ${str}\nThe modified string is ${newStr}`);


// 2) Modify your code to accept user input
//    Query the user to enter the number of letters that will be relocated

let info = input.question(`How many letters to relocate? `);
// console.log(info);


// 3) Validate your code to deal with user inputs that are longer than the word
//    In such cases, default to moving 3 characters
//    Also, the template literal should note the error

if (info > str.length) {
    info = 3;
    console.log(`ERROR: too many letters selected; defaults to three letters.`);
} else {
    let newArr = str.split(""); // store a new array of letters
    let inputNum = newArr.splice(0, info); //  user input to splice newArr
    // console.log("inputNum:", inputNum);

    newStr = newArr.concat(inputNum).join(""); // convert newArr into string & reassign to newStr
}
console.log(`The original string was ${str}\nThe modified string is ${newStr}`);