class CrewCandidate {
  constructor(name, mass, scores) {
    // scores is array of test results
  }
  addingScores() {}
  averagingScores() {}
  candidateStatus() {}
}
// check that each candidate object correctly assigns keys & values
let bear = new CrewCandidate("Bubbba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log("bear", bear);
console.log("maltese", maltese);
console.log("gator", gator);

// Part 2 - create candidate objects:

// a. Bubba Bear has 135 kg mass & test scores: [88, 85, 90]
// b. Merry Maltese 1.5 kg mass & test scores: [93, 88, 97]
// c. Glad Gator has 225 kg mass & test scores: [75, 78, 62]

// ||OUTSIDE of constructor||

// create addScore() method that pushes a new score parameter to this.scores array
// add 83 to Bubba’s record
// console.log(candidateobjectName.scores)

// Part 3 - add average() method with no parameters
// average: sum this.scores, then divide it by this.scores.length
//          return the result rounded to one decimal place
// console.log(Merry’s average test score) --> 92.7

// add status() method that returns a string
// ('Accepted', 'Reserve', 'Probationary', or 'Rejected')
// depending on candidate’s average

// status method requires average test score, callable as parameter OR from within the function
// methods can call other methods inside a class via this keyword
// once status has candidate’s average score, evaluate that score & return appropriate string
// test status method on each of the three candidates
// Use template literal to consolelog('${} earned an average test score of ${}% and has a status of ${}.')

// Part 4 - use methods to boost Glad Gator’s status to Reserve or higher
//          how many tests to reach Reserve & Accepted status?
//          scores cannot exceed 100%
//          use a loop?
