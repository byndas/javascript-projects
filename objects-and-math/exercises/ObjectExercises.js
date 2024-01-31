let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
};
let dog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
};

let waterBear = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
};

// After you create other object literals, add an astronautID key to each
// Create an array to hold animal objects

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

function uniqueId(arr) {
  let newId = Math.floor(Math.random() * 11);

  if (arr.includes(newId)) {
    return uniqueId(arr);
  } else {
    arr.push(newId);
  }
}
// generate random num 0 - 10
function crewInfo(arr) {
  let idNums = [];

  for (i = 0; i < arr.length; i++) {
    uniqueId(idNums);
    arr[i].astronautID = idNums[i];
    arr[i].move = () => Math.floor(Math.random() * 11);
  }
  return crew;
}
console.log(crewInfo(crew));

// Log relevant info for each animal
function crewReports(arr) {
  let reports = [];
  for (let i = 0; i < arr.length; i++) {
    reports.push(
      `${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astronautID}.`
    );
  }
  return reports;
}
console.log(crewReports(crew));

// race all animals!
function fitnessTest(arr) {
  let results = [],
    numSteps,
    turns;
  for (let i = 0; i < arr.length; i++) {
    numSteps = 0;
    turns = 0;
    while (numSteps < 20) {
      numSteps += arr[i].move();
      turns++;
    }
    results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
  }
  return results;
}
console.log(fitnessTest(crew));
