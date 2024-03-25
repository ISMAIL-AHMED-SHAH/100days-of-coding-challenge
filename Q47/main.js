// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2022 },
    { make: "Apple", model: "MacBook Pro", year: 2021 },
    { make: "HP", model: "Spectre x360", year: 2023 }
];
// Destructuring the first and second laptops from the array
var firstLaptop = laptops[0], secondLaptop = laptops[1];
// Logging the variables
console.log("First Laptop:", firstLaptop);
console.log("Second Laptop:", secondLaptop);
