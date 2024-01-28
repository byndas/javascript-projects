let arr = ['L', 'C', '1', '0', '1'];

function combineEntries(arrayName) {
  if (arrayName.length <= 1){
    return arrayName[0];
  } else {
    //console.log(arrayName[0], arrayName.slice(1));
    return arrayName[0] + combineEntries(arrayName.slice(1));
  }
}
// run to see the result
// uncomment console.log to see how each call to combineEntries
// looks at a different section of the original array

console.log(combineEntries(arr));
