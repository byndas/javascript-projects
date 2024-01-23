const input = require('readline-sync');

// Part A: #1 Populate these arrays (copy / paste array values)

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: write for-loop... meals.push(pantry[i][i]) -- use numMeals as limiter
  /// push each ingredient only once from each pantry item
  /// use nested loop to create meal for each crew member 
  /// push each meal (one per crew) to meals array

  for (let i=0; i<numMeals; i++) {
    let meal = [];
    for (let k=0; k<numMeals; k++) {
      meal.push(pantry[i][k]);
    }
    meals.push(meal);
  } 
  console.log(meals);
  return meals;
}


function askForNumber() {
  numMeals = input.question("How many meals would you like to make? ");
  /// PART B -- one meal per crew member
  while (numMeals < 1 || numMeals > 6) { // validate user enters 1 - 6
      numMeals = input.question("Only 6 meals possible, choose again. ");
  }
  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  /// Bonus Mission
  // for-loop combinig two strings, alternating characters
  // save combined string to code variable

  // for () {

  // }

  return code;
}

function runProgram() {
  
  /// TEST PART A #2
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function 
  /// (starting with 'let meals ='), log the result

  /// Change final input variable (aka numMeals) here to ensure right number of meals
  /// We've started with the number 2 for now.
  /// Does your solution still work if you change this value?
  
  // let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  // console.log(meals)
  

  /// TEST PART B
  /// UNCOMMENT next two lines to test your ``askForNumber()`` solution
  /// Tip - only test this part when happy with your part A #2 solution
  
  // let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  // console.log(mealsForX);

    /// TEST PART C
  /// UNCOMMENT remaining commented lines
  /// change password1 and password2 strings to ensure your code performs correctly

  // let password1 = '';
  // let password2 = '';
  // console.log("Time to run the password generator so we can update the menu tomorrow.")
  // console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

askForNumber();
mealAssembly(protein, grains, veggies, beverages, desserts, numMeals);

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
