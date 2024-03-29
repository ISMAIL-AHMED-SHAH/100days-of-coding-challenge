// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str) {
    var upperCaseStr = str.toUpperCase();
    var lowerCaseStr = str.toLowerCase();
    // Example: Changing the case of "Ismail Ahmed Shah"
    console.log("Original String: ".concat(str));
    console.log("Uppercase String: ".concat(upperCaseStr));
    console.log("Lowercase String: ".concat(lowerCaseStr));
    // Outputs: "Uppercase: ISMAIL AHMED SHAH Lowercase: ismail ahmed shah"
    // We're showing the same text in all uppercase and then all lowercase.
}
var myString = "Ismail Ahmed Shah!";
convertCase(myString);
