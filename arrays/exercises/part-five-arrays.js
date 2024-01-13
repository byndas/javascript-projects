let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use .split() on str to identify the purpose of the parameter inside the ().

console.log(str.split()); // logs str as a sinle item in an array
console.log(str.split('e')); // logs an array of items from "e" to "e" & removes each "e"
console.log(str.split(' ')); // logs an array of item from " " to " " & removes each " "
console.log(str.split('')); // logs an array containing each string index as an item

//2) Use .join() on arr to identify the purpose of the parameter inside the ().
console.log(arr.join()); // 

//3) Do split or join change the original string/array?  NO
console.log(str);  // str is not altered
console.log(arr); // arr is not altered

//4) We can take a comma-separated string and convert it into a modifiable array.
// Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let cargoArr = cargoHold.split(",");
console.log(cargoArr); // logs array of strings, one for each word in cargoHold

let sortArr = cargoArr.sort();
console.log(sortArr); // logs cargoArr with string items in alphabetical order

console.log(sortArr.join(','));
// logs a string like cargoHold except with each word in alphabetical order 