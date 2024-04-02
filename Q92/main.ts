// Question 92: Write a function to remove the last element from an array and return the removed element.

// Define a function to remove the last element from an array
function removeLastElement1(array) {
    // Check if the array is not empty
    if (array.length > 0) {
        // Remove the last element from the array and store it
        let removedElement = array.pop();
        // Return the removed element
        return removedElement;
    } else {
        // If the array is empty, return undefined
        return undefined;
    }
}

// Example usage:
let myArray = ["apple", "banana", "cherry", "mango", "strawberry"];
let removedElement = removeLastElement1(myArray);
console.log("Removed element:", removedElement);
console.log("Updated array:", myArray);
