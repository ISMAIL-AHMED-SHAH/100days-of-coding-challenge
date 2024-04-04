//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function mixedTypeSum(num1, num2Str) {
    // Convert the string to a number using parseFloat()
    var num2 = parseFloat(num2Str);
    // Return the sum after conversion
    return num1 + num2;
}
// Example usage
var number1 = 10;
var number2String = "5";
var sum = mixedTypeSum(number1, number2String);
console.log("Sum:", sum);
