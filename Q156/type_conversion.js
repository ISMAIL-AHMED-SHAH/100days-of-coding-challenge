// JavaScript Type Conversion and Explicit Conversion Functions

// String Conversion
let booleanValue = true;
let stringValue = String(booleanValue);
console.log(typeof stringValue); // Output: string

// Numeric Conversion
let numericString = "42";
let numericValue = Number(numericString);
console.log(typeof numericValue); // Output: number

// Boolean Conversion
let emptyValue = null;
let nonEmptyValue = "Hello";
console.log(Boolean(emptyValue)); // Output: false
console.log(Boolean(nonEmptyValue)); // Output: true
