// Question 92: Write a function to remove the last element from an array and return the removed element.
// Define a function to remove the last element from an array
function removeLastElement1(array) {
    // Check if the array is not empty
    if (array.length > 0) {
        // Remove the last element from the array and store it
        var removedElement_1 = array.pop();
        // Return the removed element
        return removedElement_1;
    }
    else {
        // If the array is empty, return undefined
        return undefined;
    }
}
// Example usage:
var myArray = ["apple", "banana", "cherry", "mango", "strawberry"];
var removedElement = removeLastElement1(myArray);
console.log("Removed element:", removedElement);
console.log("Updated array:", myArray);
