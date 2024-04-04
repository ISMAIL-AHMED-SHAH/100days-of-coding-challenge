// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Using `let` for a variable that can be reassigned
var age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
var name = "Ali";
try {
    name = "Bilal"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
var score = 90;
score = 95; // Allowed
console.log(score); // Output: 95
var PI = 3.14;
PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant
console.log(PI); // This line won't execute due to the error
