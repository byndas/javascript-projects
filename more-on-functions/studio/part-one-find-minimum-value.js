let nums1 = [2, 10, 5, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, -3.3, 10, 8, 5, 3, 4.4, 0];

//   create func with array as param
//   loop through param to find & return min value
//   use if-statement to compare & store min value

function findMin(arr) {
    let minValue = arr[0];
    
    for (i=1; i<arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

console.log(findMin(nums1));
console.log(findMin(nums2));
console.log(findMin(nums3));