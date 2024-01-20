const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle
// one for the starting fuel level
// one for the number of astronauts aboard
// one for the altitude the shuttle reaches
let fuelNum, crewNum, altitude;

//Exercise #4: Construct while loops to do the following:

//a. Ask user for starting fuel level
//   Validate user enters positive integer > 5000 && < 30000
let fuelInfo = input.question(`Enter pre-launch fuel # (5,001 - 29,999): `);

// while (fuelInfo > 5000 && fuelInfo < 30000) { fuelNum = fuelInfo; }
// infinite loop! if range error

if (info > 5000) {
  if (info < 30000) {
    fuelNum = fuelInfo;
  } else {
    console.log(`ERROR: invalid range -- try again!`);
    fuelInfo();
  }
}


//b. Make while loop asking user for crewNum (max 7) & validates that
let crewInfo = input.question(`Enter number of astronauts (1 - 7): `);

// while (crewInfo > 0 && crewInfo < 8) { crewNum = crewInfo; }
// infinite loop! if range error

if (crewInfo > 0) {
  if (crewInfo < 8) {
    crewNum = crewInfo;
  } else {
    console.log(`ERROR: invalid range -- try again!`);
    crewInfo();
  }
}

//c. Make while loop that monitors fuel & altitude
// with each iteration:
// decreasing fuel by 100 for each crewNum
// & increasing altitude by 50 km

while (fuelNum > 0) {
  console.log("fuelNum" , fuelNum, "altitude ", altitude);
  fuelNum -= 100;
  altitude += 50;
}

//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

// If altitude is 2000 km or higher, “Orbit achieved!”
// Otherwise, “Failed to reach orbit.”

console.log(`The shuttle gained an altitude of ${altitude} km.`)

if (altitude >= 2000) {console.log(`Orbit achieved!`);}
else {console.log(`Failed to reach orbit.`);}