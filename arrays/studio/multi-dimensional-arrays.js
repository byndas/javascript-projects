const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

// 1) Use split to convert the strings into four cabinet arrays
//    Alphabetize the contents of each cabinet
food = food.split(",").sort();
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();

// 2) cargoHold = [] & add the cabinet arrays to it
//    Log cargoHold to verify its structure
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);

// 3) Query the user to select a cabinet (0 - 3) in the cargoHold
let cabinetIndex = input.question("Choose a cabinet (0-3): ");

// 4) Use bracket notation & a template literal to display contents of selected cabinet
//    If user entered invalid number, log error message

if (cabinetIndex > 3) {
    console.log(`ERROR: MUST CHOOSE CABINET # 0 - 3`);
} else {
    console.log(`CABINET ${cabinetIndex}: ${cargoHold[cabinetIndex]}`);
}

// 5) Modify code to query user for BOTH a cabinet in cargoHold AND a particular item
//    Use .includes() to check if cabinet contains selected item
//    then log “Cabinet ____ DOES/DOES NOT contain ____.”

let itemInfo = input.question("Choose a cabinet item: ")

if (cabinetIndex > 3) {
    console.log(`ERROR: MUST CHOOSE CABINET # 0 - 3`);
} else {
    if (cargoHold[cabinetIndex].includes(itemInfo)) {
        console.log(`Cabinet #${cabinetIndex} CONTAINS ${itemInfo}`);
    } else {
        console.log(`Cabinet #${cabinetIndex} DOES NOT CONTAIN ${itemInfo}`);
    }
}
