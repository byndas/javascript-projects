/* 
Create anonymous function set equal to a variable
Your function should:
a) If passed a number, return tripled value
b) If passed a string, return “ARRR!”
c) Test your function before continuing

Increase your code! 
Use your fuction with .map() to change an array as follows:
a) Triple any numbers
b) Replace any strings with “ARRR!”
c) Log the new array to confirm the result
*/
let arr = ["Elocution", 21, "Clean teeth", 100];

let anon = function (p) {
  if (isNaN(p)) {
    return "ARRR!";
  }
  return p * 3;
};
console.log(anon(5), anon("YES"));
console.log(arr.map(anon));
