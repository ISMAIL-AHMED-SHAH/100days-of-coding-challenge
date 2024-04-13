// Question 129: Explain the difference in behavior of the 'this' keyword between traditional functions and arrow functions.
var person = {
    name: 'Ali',
    greet: function () {
        console.log('Hello, ' + this.name);
    }
};
person.greet(); // Outputs: Hello, John
var greetFunction = person.greet;
greetFunction(); // Error: 'this' implicitly has type 'any'
