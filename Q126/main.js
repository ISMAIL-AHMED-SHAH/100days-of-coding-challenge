// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
// Demonstrates 'this' behavior change in a nested function
var myObject = {
    property: 10,
    nestedfunction: function () {
        var _this = this;
        console.log(this.property); // Works as expected, logs "Value"
        var innerMethod = function () {
            console.log(_this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.nestedfunction();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
