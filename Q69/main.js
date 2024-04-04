// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// This function divides two numbers and finds the quotient and remainder
function divideWithRemainder(dividend, divisor) {
    // Perform division and get remainder using modulo (%)
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    // Return an object with quotient and remainder properties
    return { quotient: quotient, remainder: remainder };
}
// Example usage
var divided = divideWithRemainder(17, 5);
console.log("Division result:", divided);
