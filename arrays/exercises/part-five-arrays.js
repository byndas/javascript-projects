let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use .split() on str to identify the purpose of the parameter inside the ().

console.log(str.split()); // logs str as a sinle items in an array
console.log(str.split('e')); // logs an array of items between each "e" & removes each "e"
console.log(str.split(' ')); // logs an array of items between " " & removes each " "
console.log(str.split('')); // logs an array containing each string character as an item

//2) Use .join() on arr to identify the purpose of the parameter inside the ().

console.log(arr.join()); // logs array items as a string with "," added between each array item 
console.log(arr.join('n')); // logs array items as a string with "n" added between each array item 
console.log(arr.join(' ')); // logs array items as a string with " " added between each array item 
console.log(arr.join('')); // logs array items with no characters between arary items

//3) Do split or join change the original string/array?  NO
console.log(str);  // str is not altered
console.log(arr); // arr is not altered

//4) Take a comma-separated string and convert it into a modifiable array
// Alphabetize the cargoHold string & join its contents into a new string
let cargoHold = "water,space suits,food,plasma sword,batteries";

let cargoArr = cargoHold.split(","); // splits string between "," into array items
console.log(cargoArr);

let sortArr = cargoArr.sort(); // alphabetically orders array items
console.log(sortArr);

console.log(sortArr.join(',')); // converts sortArr to a string adding "," between each array item