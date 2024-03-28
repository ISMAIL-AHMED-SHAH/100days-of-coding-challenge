// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// Details of an object
function objectProperties(obj: object) {
    for (let prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }
}

// Example usage:
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "blue"
};

objectProperties(car);


