let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

function removeI(arr) {
    if (/* Enter base case test here */){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};
console.log(removeI(arrayToChange));
