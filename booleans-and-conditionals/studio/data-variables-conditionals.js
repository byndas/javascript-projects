// Initialize Variables below

// let date = Monday 2019-03-18;
// let time = 10:05; //:34;
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100; //%;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// verify total number of astronauts does not exceed 7
if (astronautCount <= 7) {

    // verify all astronauts are ready
    if (astronautStatus === "ready") {

        // verify total mass does not exceed 850000
        if (totalMassKg <= 850000) {

            // verify fuel temperature is within -150 and -300
            if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {

                // verify the fuel level is at 100%
                if (fuelLevel === 100) {

                    // verify the weather status is clear
                    if (weatherStatus === "clear") {

                        // Verify shuttle launch can proceed based on above conditions
                        if (preparedForLiftOff) {
                            console.log("Have a safe trip astronauts!")
                        }
                    }
                }
            }
        }   
    }
}