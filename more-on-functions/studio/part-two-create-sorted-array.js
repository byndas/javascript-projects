function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

/*  create function with array of numbers as a parameter
    return a new array with numbers sorted least to greatest

    within that function:
1)  define new, empty array to hold the final sorted numbers
2)  use findMinValue function to find the min value in the old array
3)  push min value to the new array & remove min value from old array
4)  repeat parts b & c until the old array is empty
5)  return new sorted array
6)  log results to confirm  */





//  BONUS MISSION: Refactor your sorting function to use recursion below:

//  sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
