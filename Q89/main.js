// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// This function changes a string into a number
function convertToNumber(numberString) {
    return parseFloat(numberString);
}
// // Example: Turning a numeric string into a real number
var numberString = "123.45";
var numberString1 = "99";
var numberValue = convertToNumber(numberString);
var numberValue1 = convertToNumber(numberString1);
console.log("The converted number is: ".concat(numberValue));
console.log("The converted number is: ".concat(numberValue1));
// We're taking strings that look like numbers and turning them into actual numbers.
// // This function changes a string into a number
// function convertStringToNumber(str: string): number {
//     return parseFloat(str); // Converts the string to a number
// }
// console.log(convertStringToNumber("123.45")); // Outputs: 123.45
// console.log(convertStringToNumber("98")); // Outputs: 98
