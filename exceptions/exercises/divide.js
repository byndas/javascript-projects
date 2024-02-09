// write a function called 'divide' with two parameters: numerator & denominator
// return result of (numerator / denominator)
// if denominator is zero, throw error "Attempted to divide by zero!"
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw Error("You cannot divide by zero!");
  }
  return numerator / denominator;
}
