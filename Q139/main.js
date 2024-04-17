// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
// Reserved word: let - used to declare a block-scoped local variable
var temperature = 25;
// Reserved word: if - used to execute a block of code if a specified condition is true
if (temperature > 30) {
    console.log("It's a hot day!"); // This code block will not execute
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a pleasant day!"); // This code block will execute
}
else {
    console.log("It's a cold day!"); // This code block will not execute
}
// Reserved word: return - used to exit a function and return a value from that function
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet('Salman')); // Outputs: Hello, Salman!
