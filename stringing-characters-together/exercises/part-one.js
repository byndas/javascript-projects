let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to log integer length (# of digits)
console.log(String(num).length);
//Follow up: log the # of digits in a DECIMAL value
///(e.g. num = 123.45 has 5 digits but a length of 6).
num = 1001.55;
console.log(String(num).length-1); // -1 adjusts for the "." index number
//Experiment! What if num is EITHER an integer or a decimal?  
//Add an if/else statement to handle both cases.

if (String(num).includes(".")){
    console.log(String(num).length-1);
} else {
    console.log(String(num).length);
}
