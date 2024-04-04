// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkForJavaScriptPresence(str) {
    // Using includes() to check if the string contains "JavaScript"
    return str.includes("JavaScript");
}
// Example usage:
var text1 = "I love JavaScript!";
var text2 = "Python is great.";
console.log(checkForJavaScriptPresence(text1)); // Output: true
console.log(checkForJavaScriptPresence(text2)); // Output: false
// It simply says true if "JavaScript" is there, or false if it's not.
