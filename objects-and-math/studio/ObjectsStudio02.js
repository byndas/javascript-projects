// Candidate data & crew array
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

let crew = [candidateA, candidateC, candidateE];

// MY SOLUTION
// A changeable crew array is at end of file
let altitude = 2000; // km
let radius = 2000; // km
let speed = 28000; // km/hr

function orbitCircum(radius) {
  // Return 2πr, rounded to nearest integer
  return Math.round(2 * Math.PI * radius);
}

function missionDuration(orbits, radius, speed) {
  let hrs = (orbits * orbitCircum(radius)) / speed;
  let roundedHrs = (Math.round(hrs) * 100) / 100;
  // Return hrs to complete a set # of orbits, rounded to two decimal places
  // For example, with default radius & speed, 5 orbits takes 2.24 hours
  console.log(
    `Mission will orbit ${orbitCircum(radius)} km in ${roundedHrs} hours.`
  );
  return roundedHrs;
}
console.log(missionDuration(3, radius, speed));

// BONUS: candidateE has least o2Used
function oxygenExpended(candidateObj) {
  // NOT crew array
  let duration = missionDuration(3, radius, speed);
  let oxygenUsed = Math.round(candidateObj.o2Used(duration) * 1000) / 1000;
  return `${candidateObj.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`;
}

function selectRandomCandidate(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(oxygenExpended(selectRandomCandidate(crew)));

// let spaceWalkOrbits = 3;

// Mission is not limited to default radius and speed
// Refactor oxygenExpended to accept values for these items
// Include values in missionDuration call
