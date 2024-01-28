const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }
    return userInput;
}

// write a validator to ensure input starts with "a"
// write a validator to ensure input is a vowel
// test your code!
