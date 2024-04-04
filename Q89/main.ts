// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// This function changes a string into a number
function convertToNumber(numberString: string): number {
    return parseFloat(numberString);
}

// // Example: Turning a numeric string into a real number
let numberString = "123.45";
let numberString1 = "99"
let numberValue = convertToNumber(numberString);
let numberValue1 = convertToNumber(numberString1);
console.log(`The converted number is: ${numberValue}`);
console.log(`The converted number is: ${numberValue1}`);
// We're taking strings that look like numbers and turning them into actual numbers.



// // This function changes a string into a number
// function convertStringToNumber(str: string): number {
//     return parseFloat(str); // Converts the string to a number
// }


// console.log(convertStringToNumber("123.45")); // Outputs: 123.45
// console.log(convertStringToNumber("98")); // Outputs: 98
