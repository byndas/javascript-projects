// assumes positive integer argument
function factorial(integer){
  if (/*enter base case test here*/){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}
console.log(factorial(4));
// Write validation to return error message if argument is
// a string, negative number or decimal value
