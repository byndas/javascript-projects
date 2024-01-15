//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let initials = language.slice(0,1) + language.slice(4,5);
// console.log("initials", initials);

//2. Without using slice(), use method chaining to accomplish the same thing
console.log("JS", language.split("ava").join("").split("cript").join(""));

//3. Use bracket notation and a template literal to log "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${initials}'.`);

//4. Chain 3 or more methods together and log the result
console.log("JS", language.split("ava").join("").split("cript").join(""));

//Part Three section Two

//1. Use string methods to log 'Title Case' from the string 'title case'
let notTitleCase = 'title case';

console.log("title case", notTitleCase.replace("t","T").replace("c","C"));


