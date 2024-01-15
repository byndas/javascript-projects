//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
// 1) Use .trim() to remove leading & trailing whitespace,
let trimStr = dna.trim();
// log the result
console.log(trimStr);


// 2) Change all dna string to UPPERCASE
let upperStr = dna.toUpperCase();
// log the result
console.log(upperStr);


// 3) The original, flawed string is still stored in dna 
// Reassign the changes back to dna
// Log the DNA strand in UPPERCASE with no whitespace
dna = dna.trim().toUpperCase();
console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

// 1) Replace "GCT" gene with "AGG", log the altered strand
console.log(dnaTwo.replace("GCT", "AGG"));

// 2) Look for "CAT" gene with ``indexOf()``
let geneIndex = dnaTwo.indexOf("CAT");
// If found log, "CAT gene found"
if (geneIndex !== -1) {
    console.log("CAT gene found");
} else { // Else log "CAT gene NOT found"
    console.log("CAT gene NOT found");
}

// 3) Use .slice() to log the fifth gene
console.log(dnaTwo.slice(16,19));
// 4) Use a template literal to log,
//  "The DNA strand is ___ characters long."
console.log(`\"The DNA strand is ___ characters long.\"`);
// 5) Apply methods to ``dna`` 
// Use another template literal to log 'taco cat'
console.log(`\'taco cat\'`);