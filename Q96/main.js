// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// This function calculates the sum of all numbers in an array
// function calculateSum(numbers: number[]): number {
//     return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }
var numbers = [5, 10, 15, 20];
var sum = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sum); // Output: 50
