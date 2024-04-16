// Question 137: Implement a try-catch block to handle potential errors in a block of code.
try {
    // Block of code where errors may occur
    var result = someFunction(); // Assume someFunction() may throw an error
    // Other code inside the try block
    console.log("Result:", result);
}
catch (error) {
    // Block of code to handle errors
    console.error("An error occurred:", error.message);
    // Additional error handling or logging can be added here
}
finally {
    // Optional 'finally' block, executes regardless of whether an error occurred or not
    console.log("Finally block executed.");
}
