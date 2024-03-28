// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
// Details of an object
function objectProperties(obj) {
    for (var prop in obj) {
        console.log("".concat(prop, ": ").concat(obj[prop]));
    }
}
// Example usage:
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "blue"
};
objectProperties(car);
