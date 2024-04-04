// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
function example() {
    {
        // Block scope using curly braces {}
        var blockLetVariable = "Inside the block";
        var blockConstVariable = "Also inside the block";
        console.log(blockLetVariable); // Output: Inside the block
        console.log(blockConstVariable); // Output: Also inside the block
    }
    // Attempting to access block variables outside the block:
    console.log(blockLetVariable); // Error: blockLetVariable is not defined
    console.log(blockConstVariable); // Error: blockConstVariable is not defined
}
example(); // Calling the function to execute the code
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
