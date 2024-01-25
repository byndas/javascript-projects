// COMPLETELY reverse an array:

// flip the order of entries
// AND flip the order of characters in each element


//    Part One: Reverse Characters

// 1. define a function named reverseCharacters with a string parameter to reverse


// 2. & 3. within f(string), split string into array, reverse, join & return it (string)


// 4. below the function, define & initialize a variable to hold a string... x = "";


// 5. console.log(reverseCharacters(myVariableName)); to verify f(string) reverses string


// 6. Optional: chain methods to reduce lines in function



//    Part Two: Reverse Digits

// 1. Add if-statement to reverseCharacters(str) to check typeof parameter

// 2. If typeof is 'string', return reversed string as before

// 3. If typeof is 'number', convert parameter to a string, reverse characters,
//    & convert it back into a number

// 4. Return the reversed number

// 5. Log result returned by function to confirm for both strings and numbers
//    Do this before the next exercise


//    Part Three: Complete Reversal

// 1. Define & initialize empty array

// 2. Loop through old array

// 3. For each element in old array, call reverseCharacters() to flip characters or digits

// 4. Add reversed string or num to the array defined in PART ONE (a)

// 5. Return final reversed array

// 6. Log results from each test case to confirm

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];


//    Bonus Missions

// 1. Use a clear, descriptive name like funPhrase

// 2. Retrieve only last character from strings with lengths <= 3

// 3. Retrieve only first three characters from strings with lengths > 3

// 4. Use template literal to return `We put the '_' in '_'.`
//    Fill first blank with modified string & second blank with original string


//    Test Function

// 1. Outside function, define variable 'str' set equal to a string 

// 2. Call your function & log the returned phrase



//    Area of rectangle = length x width

// 1. Define function with parameters to calculate area of rectangle

// 2. Return area but do NOT log it

// 3. Call your area function by passing in two arguments... (length, width)

// 4. If only one argument passed to function, then the shape is a square
//    Modify your code to handle that

// 5. Use template literal to log `The area is ____ cm^2.`
