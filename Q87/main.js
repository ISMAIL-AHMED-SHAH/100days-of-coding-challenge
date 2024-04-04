// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 10); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("This is a sample text for demonstration.!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.
