function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7 - arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length - 7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

//   steal some shuttle fuel:
 
//A) define anonymous function
//   set it equal to a variable with an unsuspicious name
//   give it a parameter for the shuttle's fuel level

//B) take shuttle fuel:
//   inside your function, reduce fuel level as much as possible
//   WITHOUT changing the color that checkFuel() returns

//C) return how much fuel to take from shuttle

//D) decide where to call your function that takes shuttle fuel


//   steal some shuttle cargo:

//a) define another anonymous function with an array as a parameter
//   set it equal to another innocently named variable

//b) swipe two items from the cargo hold
//   choose wisely: most valuable cargo first
//   push the loot into new array & return it in that anon function

//c) since cargo-hold counts its storage, replace stolen items with worthlesss stuff
//   the count MUST stay the same or you’ll be caught & jailed

//d) test your function


//   log a theft receipt:
 
//A) define an irs function with fuelLevel & cargoHold as arguments (perameters?)
	
//B) call your anonymous fuel & cargo functions from within the irs function

//C) use template literal to return:
//  `Raided ${_} kg of fuel from the tanks, and stole ${_} and ${_} from the cargo hold.`

