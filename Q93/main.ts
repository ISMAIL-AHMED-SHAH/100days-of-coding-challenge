// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// Define an array of fruits
let fruits1 = ["Apple", "Banana", "Orange", "Grapes"];

// Find the index of "Banana" in the array
let bananaIndex = fruits1.indexOf("Banana");

// Check if "Banana" exists in the array
if (bananaIndex !== -1) {
    // Replace "Banana" with "Mango" using bracket notation
    fruits1[bananaIndex] = "Mango";
    console.log("Fruits after replacement:", fruits1);
} else {
    console.log("Banana not found in the array.");
}

