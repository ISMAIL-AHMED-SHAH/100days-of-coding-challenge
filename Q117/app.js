// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
function evaluateExpression(value) {
    var result;
    switch (value) {
        case 1:
            result = "One";
            break;
        case 2:
            result = "Two";
            break;
        case 3:
            result = "Three";
            break;
        default:
            result = "Other";
    }
    return result;
}
// Example usage
console.log(evaluateExpression(2)); // Output: Two
console.log(evaluateExpression(5)); // Output: Other
