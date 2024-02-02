// import launchcode from "../../unit-testing/studio";

let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateB, candidateD, candidateF];

function crewMass(arr) {
  let sumCrewMass = 0;
  for (let i = 0; i < arr.length; i++) {
    sumCrewMass += arr[i].mass;
  }
  // returns crewMass rounded to one decimal place
  return Math.round(sumCrewMass * 10) / 10;
}
console.log(crewMass(crew));

let rocketMass = 75000; // kg
let sumLaunchMass = rocketMass + crewMass(crew); //kg
let launchFuel = 9.5 * sumLaunchMass; // kg

// 9.5 kg fuel per 1 kg of crew mass
function fuelRequired(arr) {
  // LaunchFuel requires a safety margin:
  for (let i = 0; i < arr.length; i++) {
    // Add 200 kg fuel per dog or cat
    if (arr[i].species === ("cat" || "dog")) {
      launchFuel += 200;
    } else {
      // plus 100 kg for all other species
      launchFuel += 100;
    }
  }
  // round up fuel total
  return Math.ceil(launchFuel);
}

console.log(
  `Mission launch mass is ${sumLaunchMass} kg, requiring ${fuelRequired(
    crew
  )} kg of fuel.`
);
