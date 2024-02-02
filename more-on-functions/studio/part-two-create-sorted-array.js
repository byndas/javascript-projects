let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMin(arr){
  let min = arr[0];
  for (i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
/*  create func with array as parameter
    return new array with numbers sorted least to greatest

    define empty result array to hold final sorted numbers
    push findMinValue(arr) to new array & remove min value from param
    repeat until old array is empty
    use recursion  
    return new sorted array 
    log sortNums(testArr) */

let sortedArr = [];

function sortNums(arr) {
  let minValue = findMin(arr);
  let minValueIndex = arr.indexOf(minValue);
  
  sortedArr.push(minValue);
  arr.splice(minValueIndex, 1);

  // console.log(`sortedArr:`, sortedArr);
  // console.log(`arr:`, arr);
  
  while (arr.length) {
    sortNums(arr);
  }
  return sortedArr;
}

console.log(sortNums(nums1));
console.log(sortNums(nums2));
console.log(sortNums(nums3));