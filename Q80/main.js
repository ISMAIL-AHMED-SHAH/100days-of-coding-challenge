// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
// Starting with our car object
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// // Adding a new property 'color' and updating 'year'
// car.color = "blue"; // Adds a new property 'color'
// car.year = 2021; // Updates the 'year' property
// // Showing the updated car object
// console.log(car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
// Existing car object
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2024
}; // Note the `color?: string` indicating an optional property
// Adding a property named color to the existing car object
car.color = "blue";
// Updating the year property of the car object to 2021
car.year = 2023;
// Displaying the updated car object
console.log(car);