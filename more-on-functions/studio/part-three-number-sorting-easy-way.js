let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//  sort each array in ascending order
const ascending = function(a, b) { return a - b };

console.log(`ascending:`, nums1.sort(ascending));
console.log(`ascending:`, nums2.sort(ascending));
console.log(`ascending:`, nums3.sort(ascending));


// sort each array in decending order
const descending = function(a, b) { return b - a };

// since arr.sort() mutates arr, can do arr.reverse() 
console.log(`descending:`, nums1.reverse());
console.log(`descending:`, nums2.reverse());
console.log(`descending:`, nums3.reverse());

//  CAN ALSO DO:
// console.log(`descending:`, nums1.sort(descending));
// console.log(`descending:`, nums2.sort(descending));
// console.log(`descending:`, nums3.sort(descending));