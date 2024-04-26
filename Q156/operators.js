// Operators in JavaScript

// Arithmetic Operators
let sum = 5 + 2; // Addition
let difference = 5 - 2; // Subtraction
let product = 5 * 2; // Multiplication
let quotient = 5 / 2; // Division
let remainder = 5 % 2; // Modulus

// Exponentiation
let power = 2 ** 3; // 2 raised to the power of 3

// String Concatenation
let helloWorld = "hello " + "world";

// Unary Plus
let nonNumber = +"123"; // Converts string "123" to number 123

// Assignment
let x = 5; // Assigns the value 5 to variable x

// Chaining the Assignments
let a, b, c;
a = b = c = 2 + 2; // Assigns the value of 4 to variables a, b, and c

// Modify-in-place Operators
let num = 5;
num += 3; // Equivalent to: num = num + 3;

// Increment/Decrement
let counter = 0;
counter++; // Postfix increment: increases counter by 1
++counter; // Prefix increment: also increases counter by 1

// The Comma Operator
let multipleExpressions = (1 + 2, 3 + 4); // Evaluates both expressions but returns the value of the last one

console.log(sum); // Output: 7
console.log(difference); // Output: 3
console.log(product); // Output: 10
console.log(quotient); // Output: 2.5
console.log(remainder); // Output: 1
console.log(power); // Output: 8
console.log(helloWorld); // Output: helloworld
console.log(nonNumber); // Output: 123
console.log(a, b, c); // Output: 4 4 4
console.log(num); // Output: 8
console.log(counter); // Output: 2
console.log(multipleExpressions); // Output: 7

