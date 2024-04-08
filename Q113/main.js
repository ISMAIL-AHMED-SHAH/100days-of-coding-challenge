// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Function to check if a Map contains a key for "Canada" and log the capital if it exists
var countryCapitalMap1 = new Map([
    ["Canada", "Ottawa"],
    ["Pakistan", "Karachi"],
    ["Qatar", "Doha"]
]);
// Function to check if a Map contains a key for "Canada" and log the capital if it exists
function checkMapForCanada1(map) {
    if (map.has("Canada")) {
        console.log("The capital of Canada is: ".concat(map.get("Canada")));
    }
    else {
        console.log("Canada is not found in the map.");
    }
}
// Example usage
checkMapForCanada1(countryCapitalMap1);
