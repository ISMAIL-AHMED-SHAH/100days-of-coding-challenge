// Question-146: Describe how the .filter() method works in JavaScript, along with its usage with a callback function. Provide an example demonstrating its application to filter out numbers greater than 5 from an array

// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uses .filter() with a callback function to filter out numbers greater than 6
const filteredNumbers: number[] = numbers.filter((number) => number > 6);

console.log(filteredNumbers); // Outputs: [7, 8, 9, 10]
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
