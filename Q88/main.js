// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger1(decimalNumber) {
    return Math.round(decimalNumber);
}
// Example usage:
var decimalNumber = 3.7;
var roundedNumber = roundToNearestInteger1(decimalNumber);
console.log("The nearest integer to ".concat(decimalNumber, " is ").concat(roundedNumber));
var decimalNumber1 = 4.7;
var roundedNumber1 = roundToNearestInteger1(decimalNumber1);
console.log("The nearest integer to ".concat(decimalNumber1, " is ").concat(roundedNumber1));
// This shows how the function rounds numbers either up or down.
// function roundToNearestInteger(num: number): number {
//     return Math.round(num); // Rounds the number
// }
// // Example: Rounding a decimal
// console.log(roundToNearestInteger(4.7)); // Outputs: 5
// console.log(roundToNearestInteger(4.4)); // Outputs: 4
