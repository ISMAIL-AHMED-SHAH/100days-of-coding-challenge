// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

// Defines an array with some words
const words: string[] = ["Syed", "Ismail", "Ahmed", "Shah"];
// Uses .map() to create a new array with the length of each word
const lengths: number[] = words.map(word => word.length);

console.log(lengths); // Outputs: [4, 6, 5, 4]
// Each number in the new array represents the length of the corresponding word in the original array.