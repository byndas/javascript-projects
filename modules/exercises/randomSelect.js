function randomFromArray(arr) {
  // select random index from arr
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
