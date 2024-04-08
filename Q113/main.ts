// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Function to check if a Map contains a key for "Canada" and log the capital if it exists

let countryCapitalMap: Map<string, string> = new Map([
    ["Canada", "Ottawa"],
    ["Pakistan", "Karachi"],
    ["Qatar", "Doha"]
]);

// Function to check if a Map contains a key for "Canada" and log the capital if it exists
function checkMapForCanada(map: Map<string, string>): void {
    if (map.has("Canada")) {
        console.log(`The capital of Canada is: ${map.get("Canada")}`);
    } else {
        console.log("Canada is not found in the map.");
    }
}

// Example usage
checkMapForCanada(countryCapitalMap);




