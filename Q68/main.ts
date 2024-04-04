//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number): number {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
const num1 = 3.14;
const num2 = 2.71;

const result = multiplyDecimals(num1, num2);
console.log("Product (rounded to two decimals):", result);
// After multiplying, we round to make the result easier to read.

