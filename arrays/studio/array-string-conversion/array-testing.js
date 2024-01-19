let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//b) 
function reverseCommas() {
    //TODO: create and instantiate your variables.
    let check = strings[0];
    let output = [];
    //TODO: write the code required for this step
    if(check.includes(',')) {
        output = check.split(',').reverse().join(',')
    }

    //NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
    return output;
}

//c)
function semiDash() {
    let check = strings[1];
    let output = [];

    if(check.includes(';')) {
        output = check.split(';').sort().join('-');
        } 
    return output;
}

//d)
function reverseSpaces() {
    let check = strings[2]
    let output = [];

    if(check.includes(' ')) {
        output = check.split(' ').sort().reverse().join(' ');
    }
    return output;
}

//e)
function commaSpace() {
    let check = strings[3];
    let output = [];

    if(check.includes(', ')) {
        output = check.split(', ').reverse().join(',');
    }
    return output;
}


// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
    strings : strings, 
    reverseCommas : reverseCommas,
    semiDash: semiDash, 
    reverseSpaces : reverseSpaces,
    commaSpace : commaSpace
};


/*
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	// TODO: 1. create and instantiate your variables
	// let check = "";
	//let output;
	let check = strings[0];
	let output = [];
	//	TODO: 2. write the code required for this step
	if (check.includes(',')) {
		output = check.split(',').reverse().join(',');
	}
	return output;
	
	//	PSEUDO-CODE: If string uses commas to separate the words... protoArray4!
	for (i=0; i<strings.length; i++) { // loop through strings array
		if (strings[i].includes(",")) { // if item includes ","
			// console.log(strings[i][0], !Number(strings[i][0]));
			if (!Number(strings[i][0])) { // if first letter is not a number
				check += strings[i]; // add the string to check
			}
		}
	} //  console.log(check);

	//	split into array & reverse items, join array into new comma-separated string
	//	For example, "up,to,code,fun" becomes "fun,code,to,up"/
	output = check.split(",").reverse().join();
	//NOTE:  return your output as the final line in the function
	return output;
}

//3)
function semiDash() {
	// let check = "";
	// let output;
	let check = strings[0];
	let output = [];

	

// 	TODO: write the code required for this step
//	If the string uses semicolons to separate the words
	for (i=0; i<strings.length; i++) { // filter strings for ";"
		if (strings[i].includes(";")) {
			check += strings[i];
		}
	}
	console.log(check);
//	split it into an array & alphabetize the entries
//	join the array into a new hyphen-separated string 
//  For example, "up;to;code;fun" becomes "code-fun-to-up"
    output = check.split(",").sort().join().replaceAll(";","-"); // "A-C-M-E"
	return output;
}

//4)
function reverseSpaces() {
	let check = "";
	let output;
//	TODO: write the code required for this step
//	If the string uses spaces to separate the words
	for (i=0; i<strings.length; i++) { // filter strings for ";"
		if (strings[i].includes(" ")) {
			if (!strings[i].includes(",")) { // filter out strings with ","
				check += strings[i];
			}
		}
	}
	console.log(check);
//	split into array & reverse alphabetize items
//	join array into a new space-separated string
	output = check.split(" ").sort().reverse().join(" ");
//	For example, "to code up fun" becomes "up to fun code"
	return output;
}

//5)
function commaSpace() {
	let check = "";
	let output;
	//	TODO: write the code required for this step
	//	Consider: What if the string uses ‘comma spaces’ (, ) to separate the list?
	for (i=0; i<strings.length; i++) { // filter strings for ";"
		if (strings[i].includes(", ")) {
			check += strings[i];
		}
	}
	console.log(check);
	//	Modify your code to produce the same result as part “b”
	//  WHAT IS PART "B"?
	//	Exclude extra spaces from final string
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
*/