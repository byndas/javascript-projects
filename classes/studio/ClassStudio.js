class CrewCandidate {
  constructor(name, mass, scores) {
    // scores is array of test results
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  averageScore() {
    let scoreTotal = this.scores.reduce((total, nextScore) => {
      return total + nextScore;
    });
    let result = scoreTotal / this.scores.length;
    return Math.round(result * 10) / 10;
  }
  status(avgScore) {
    if (avgScore >= 90) {
      return "Accepted";
    }
    if (avgScore >= 80) {
      return "Reserve";
    }
    if (avgScore >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}
let bubbaBear = new CrewCandidate("Bubbba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// check each candidate object for correct keys & values
console.log("bubbaBear:", bubbaBear);
console.log("merryMaltese:", merryMaltese);
console.log("gladGator:", gladGator);

// Part 1 -- create candidate class instance objects:

// a. Bubba Bear has 135 kg mass & test scores: [88, 85, 90]
// b. Merry Maltese 1.5 kg mass & test scores: [93, 88, 97]
// c. Glad Gator has 225 kg mass & test scores: [75, 78, 62]

// ---------------------------------------------------------
// ||OUTSIDE of constructor||

// Part 2 -- create pushScore() method that pushes newScore parameter to this.scores array
// add 83 to Bubba’s record
bubbaBear.addScore(83);
console.log(`bubbaBear.scores:`, bubbaBear.scores);

// ------------------------------------------------------------

// Part 3 -- create two more methods:

// methods use ///this/// keyword to call other methods from inside a class

// A. create averageScore() method with no parameters

// let scoreTotal = this.scores.reduce((total, nextScore) => {
//    return total + nextScore;
// });

// let result = scoreTotal / this.scores.length

// return averageScore rounded to one decimal place
// return Math.round(result * 10) / 10;

console.log(`Merry’s average test score:`, merryMaltese.averageScore()); // --> 92.7

// ================================================

// B. create candidateStatus(avgScore) method that,
//      depending on candidate’s average test score perameter, --> candaditeName.averageScore()
//        returns one of these strings: 'Accepted', 'Reserve', 'Probationary', 'Rejected'
//            if( avgScore >= 90 ) { return 'Accepted'; }
//            if (avgScore >= 80) { return 'Reserve'; }
//            if (avgScore >= 70) { return 'Probationary'; }
//            else { return 'Rejected'; }

//    call candidateStatus() for all three candidates:
// bubbaBear.status(bubbaBear.averageScore);
// merryMaltese.status(bubbaBear.averageScore);
// gladGator.status(bubbaBear.averageScore);

//  --> use template literal to:
console.log(
  `${
    bubbaBear.name
  } earned an average test score of ${bubbaBear.averageScore()}% and has a status of ${bubbaBear.status(
    bubbaBear.averageScore()
  )}.`
);
console.log(
  `${
    merryMaltese.name
  } earned an average test score of ${merryMaltese.averageScore()}% and has a status of ${merryMaltese.status(
    merryMaltese.averageScore()
  )}.`
);
console.log(
  `${
    gladGator.name
  } earned an average test score of ${gladGator.averageScore()}% and has a status of ${gladGator.status(
    gladGator.averageScore()
  )}.`
);

// -----------------------------------------------------------------------------------------------------------------------

// Part 4 - use methods to boost gladGator.status to Reserve or higher
//          how many tests to reach Reserve & Accepted status?
//          scores cannot exceed 100% --> use a loop?

console.log(
  `${gladGator.name} will try until he reaches at least a score of 'Reserved'.`
);
// while (gladGator.status() !== "Accepted") {
//   let testScore = Math.floor(Math.random() * (100 - 80 + 1) + 80);
//   gladGator.addScore(testScore);
// }
