// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
function mergeTextAndNumber(text, number) {
    // Joins the text and number into a single text
    return text + number;
}
var result = mergeTextAndNumber("Age: ", 30);
console.log(result);
