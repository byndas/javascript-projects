function checkFuel(level) {
  if (level > 100000) {
    return "green";
  } else if (level > 50000) {
    return "yellow";
  } else {
    return "red";
  }
}

function holdStatus(arr) {
  if (arr.length < 7) {
    return `Spaces available: ${7 - arr.length}.`;
  } else if (arr.length > 7) {
    return `Over capacity by ${arr.length - 7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = [
  "meal kits",
  "space suits",
  "first-aid kit",
  "satellite",
  "gold",
  "water",
  "AE-35 unit",
];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));


// STEAL SHUTTLE FUEL:

// define anon func with param for shuttle fuel level
const stealShuttleFuel = function (fuelLevel) { // param unecessary
  const fuelCheckColor = checkFuel(fuelLevel);
  let fuelTaken = 0;

  while (checkFuel(fuelLevel) === fuelCheckColor) {
    fuelTaken++;
    fuelLevel--;
  } 
  fuelLevel++;
  fuelTaken--;
  // return how much fuel to take from shuttle... 99,999 fuel units
  console.log(`SHUTTLE FUEL UNITS STOLEN:`, fuelTaken);
  return fuelTaken;
};
// console.log(stealShuttleFuel(fuelLevel));


// STEAL SHUTTLE CARGO:

// define anon func with an array param
const stealCargoItems = function(cargoHold) { // unecessary param
  // steal two most valuable cargo items... "gold" & "satellite"
  let stolenArr = [];
  // replace stolen items with worthlesss stuff
  // cargoHold.length MUST not change
  for (i=0; i<cargoHold.length; i++) {
    if (cargoHold[i] === 'gold') {
      stolenArr.push(cargoHold[i]);
      cargoHold[i] = 'toilet paper';
    } 
    else if (cargoHold[i] === 'satellite') {
      stolenArr.push(cargoHold[i]);
      cargoHold[i] = 'dirt';
    }
  }
  console.log(cargoHold)
  return stolenArr;
}
// console.log(stealCargoItems(cargoHold));


// LOG THEFT RECEIPT:

// define an irs func with fuelLevel & cargoHold as arguments... (as perameters?)
function irs(fuelLevel, cargoHold) { // unecessary params
  // call your anon fuel & cargo theft functions
  const stolenFuel = stealShuttleFuel(fuelLevel);
  const stolenCargo = stealCargoItems(cargoHold);
  return `Stole ${stolenFuel} kg of shuttle fuel, then stole ${stolenCargo[0]} and ${stolenCargo[1]} of shuttle cargo.`
}
console.log(irs(fuelLevel,cargoHold));