const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
// logs error message if negative userInput
if (userInput < 0) {
  console.log(logger("Invalid input"));
}
