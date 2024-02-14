class CrewCandidate {
  constructor(name, mass, scores) {
    // scores is array of test results
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addingScores() {}
  averagingScores() {}
  candidateStatus() {}
}
let bear = new CrewCandidate("Bubbba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// check that each candidate object correctly assigns keys & values
console.log("bear", bear);
console.log("maltese", maltese);
console.log("gator", gator);

// Part 2 -- create candidate objects:
// a. Bubba Bear has 135 kg mass & test scores: [88, 85, 90]
// b. Merry Maltese 1.5 kg mass & test scores: [93, 88, 97]
// c. Glad Gator has 225 kg mass & test scores: [75, 78, 62]

// ||OUTSIDE of constructor||

// create addingScores() method that pushes a new score parameter to this.scores array
// add 83 to Bubba’s record
// console.log(candidateobjectName.scores)
// -------------------------------------------------
// Part 3 -- create averagingScores() method with no parameters
// average = this.scores summation \ this.scores.length
//          return the average rounded to one decimal place
// console.log(Merry’s average test score) --> 92.7

// create candidateStatus() method that, depending on perameter of candidate’s test score average,
// returns one of these strings: 'Accepted', 'Reserve', 'Probationary', 'Rejected'

// -- methods use ///this/// keyword to call other methods from inside a class
// call candidateStatus() for all three candidates
// consolelog(`${} earned an average test score of ${}% and has a status of ${}.`); --> use template literal
// ---------------------------------------------------------------------------------------------------------
// Part 4 - use methods to boost Glad Gator’s status to Reserve or higher
//          how many tests to reach Reserve & Accepted status?
//          scores cannot exceed 100% --> use a loop?
