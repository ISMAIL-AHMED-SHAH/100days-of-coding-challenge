// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Function declaration for squaring a number
function squareDeclaration1(num) {
    return num * num;
}
// Calling the function
console.log(squareDeclaration1(5)); // Output: 25
// Function expression
var squareExpression1 = function (num) {
    return num * num;
};
// Calling the function
console.log(squareExpression1(5)); // Output: 25
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
