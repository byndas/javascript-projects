/*    COMPLETELY reverse an array: Flip order of entries & characters

      Part One: Reverse Characters

1-3   define reverseCharacters function with a string parameter to reverse:
      split string into array, reverse, join & return */
// 4. below the function, define & initialize a variable to hold a string... x = "";
// 5. log your function call to verify string reversal
// console.log(reverseCharacters(someStr));

//    Part Two: Reverse Digits

// 1. Add if-statement to reverseCharacters(p) to check typeof parameter
// 2. If typeof is 'string', return reversed string
// 3. If typeof is 'number', convert parameter to a string, reverse characters,
//    & convert it back into a number
// 4. Return the reversed number
// 5. Log your function call to confirm results for both strings & numbers
//    Do this before the next exercise

function reverseCharacters(someVar) {
    // console.log("someVar: ", typeof someVar);
    if (typeof someVar === 'string') {
        return someVar.split('').reverse().join('');
    } else if (typeof someVar === 'number') {
        const reverseVar = someVar.toString().split('').reverse().join('');
        return parseInt(reverseVar);
    }
}
console.log(reverseCharacters('YES'));
console.log(reverseCharacters(81));

//    Part Three: Complete Reversal

// Define & set empty array, Loop through sample array
// For each element in old array, call reverseCharacters()... to flip characters or digits
// Add reversed string or number to the array defined in PART ONE (A)
// Return final reversed array
// Log results from each test case to confirm
let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

function fullReversal(array) {
    let result = [];
    for (i = array.length-1; i > -1; i--) {
        result.push(reverseCharacters(array[i]));
    }
    return result;
}

console.log(fullReversal(arrayTest1), fullReversal(arrayTest2), fullReversal(arrayTest3));


// Bonus Missions

// Use a descriptive variable name
// Retrieve last character if strings.length <= 3
// Retrieve first three characters if strings.lengths > 3
// return `We put the ${newStr} in ${originalStr}.`

let str1 = 'functions rock!';
let str2 = 'ok';

function bonusTask(str) {
    let result = "";
    if (str.length <= 3) {
        result += str[str.length - 1];
    } else {
        result = str.slice(0,3);
    }
    return `We put the ${result} in ${str}.`
}
console.log(bonusTask(str1), bonusTask(str2));


///////////////////////////////////
// rectangle area = length x width
// Define function with parameters needed to calculate & return rectangle area
// Call your function by passing in arguments length & width
// If only one argument passed to function, then the shape is a square
// Use template literal to log `The area is ____ cm^2.`

function rectArea(length, width) {
    const area = length * (width || length);
    return `The area is ${area} cm^2.`;
}
console.log(rectArea(5, 20), rectArea(3));