// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Original list of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Double each number in the original list
const doubledNumbers: number[] = numbers.map(number => number * 2);

// Output the original and doubled lists
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
