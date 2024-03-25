// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Here's a JavaScript object for a laptop with properties for make, model, year, and a method to describe it:
var laptop = {
    make: "Dell",
    model: "Inspiron",
    year: 2023,
    describe: function () {
        console.log("This laptop is a ".concat(this.make, " ").concat(this.model, " from ").concat(this.year, "."));
    }
};
laptop.describe(); // Outputs: This laptop is a Dell Inspiron from 2023.
