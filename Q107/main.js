// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// This function checks if a number is divisible by both 2 and 3
function isDivisibleBy2And3(number) {
    // Uses the modulo operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleBy2And3(16)); // Outputs: true
console.log(isDivisibleBy2And3(18)); // Outputs: false
// Logical operators help us verify the number's divisibility by both 2 and 3.
