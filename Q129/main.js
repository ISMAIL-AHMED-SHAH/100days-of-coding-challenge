// Question 129 : Explain the difference in behavior of the 'this' keyword between traditional functions and arrow functions.
var _this = this;
// Demonstrating 'this' in traditional vs. arrow functions
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("\n Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("\n Arrow function:", _this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.
