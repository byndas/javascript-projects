function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
      decreasingSum(integer);
   }
}
console.log(decreasingSum(5));
