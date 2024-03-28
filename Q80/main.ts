// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

// Existing car object
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2024
} as { make: string, model: string, year: number, color?: string }; // Note the `color?: string` indicating an optional property

// Adding a property named color to the existing car object
car.color = "blue";

// Updating the year property of the car object to 2021
car.year = 2023;

// Displaying the updated car object
console.log(car);
