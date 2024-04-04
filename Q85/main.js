// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
// First Example to print -1
function findCodePosition(str) {
    return str.indexOf("find"); // Couldn't find the word "code"
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs will be in -1
// Another example to find the postion with indexOf() method
function findCodePosition1(str) {
    // Using indexOf() to find the position of "code" within the string
    var position = str.indexOf("code");
    // If "code" is found, return its position
    if (position !== -1) {
        return position;
    }
    else {
        // If "code" is not found, return -1
        return -1;
    }
}
var str = "This is a code example.";
console.log(findCodePosition1(str)); // Output: 10
// It tells us the position number where "code" starts.
