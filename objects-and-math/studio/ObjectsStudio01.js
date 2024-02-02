let idNumbers = [291, 414, 503, 599, 796, 890];

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

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];
//////////////////////////////////////////////////////////
// Code your template literal and console.log statements:
let chosenIds = [];

function selectRandomEntry() {
  let randomIndex = Math.floor(Math.random() * idNumbers.length);

  if (chosenIds.includes(idNumbers[randomIndex])) {
    return selectRandomEntry();
  } else {
    chosenIds.push(idNumbers[randomIndex]);
  }
  return chosenIds;
}

selectRandomEntry();
selectRandomEntry();
selectRandomEntry();

console.log("chosenIds:", chosenIds);
////////////////////////////////////
// add the animals with a chosenId to crew array & return it
function buildCrewArray(idsArr, animalsArr) {
  let crewNames = [];

  // loop through animalsArr
  for (let i = 0; i < animalsArr.length; i++) {
    // push animal's name to crewNames if has a chosenId
    if (idsArr.includes(animalsArr[i].astronautID)) {
      crewNames.push(animalsArr[i].name);
    }
  }
  console.log(
    `${crewNames[0]}, ${crewNames[1]}, and ${crewNames[2]} are going to space!`
  );
  return crewNames;
}
buildCrewArray(chosenIds, animals);
