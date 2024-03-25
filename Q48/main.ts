// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


let laptopsSet1 = [1200, 1500, 1000];
let laptopsSet2 = [1100, 1300, 1400];

// Combining arrays using the spread operator
let combinedLaptops = [...laptopsSet1, ...laptopsSet2];

// Sorting the combined array in ascending order
combinedLaptops.sort((a, b) => a - b);

// Logging the result
console.log("Combined and sorted prices of laptops:", combinedLaptops);