console.log("\n'*Union Types*'\n");
// Declaring a variable with a union type
var myVariable;
// Assigning a boolean value
myVariable = true;
console.log(myVariable); // Output: true
// Reassigning with a number value
myVariable = 10;
console.log(myVariable); // Output: 10
// Attempting to assign a string (which is not allowed)
// This would result in a compilation error
// myVariable = "Hello"; // Error: Type '"Hello"' is not assignable to type 'boolean | number'
console.log("\n\n");
var myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 22; // Valid assignment
console.log(myVar);
console.log("\n\n\n'*Literal Types*'\n");
// Function to move in a specific direction
function move(direction) {
    console.log("Moving ".concat(direction));
}
// Calling the function with different literal values
move('up');
move('left');
move('down');
move('right');
// Attempting to call the function with an invalid direction
// This would result in a compilation error
// move('diagonal'); // Error: Argument of type '"diagonal"' is not assignable to parameter of type 'Direction'
console.log("\n 'Another Example' \n");
// Define the setColor function
function setColor(color) {
    console.log("Setting color to ".concat(color));
    // Additional logic to set the color...
}
// Call the setColor function with valid colors
setColor("red");
setColor("green");
setColor("blue");
// Attempt to call the setColor function with an invalid color
// This would result in a compilation error
// setColor("yellow"); // Error: Argument of type '"yellow"' is not assignable to parameter of type '"red" | "green" | "blue"'
console.log("\n\n 'NULLABLE TYPES' \n");
var username = "Glicher";
var age = 29;
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username));
    }
    if (age === null) {
        console.log("Age: Unknown");
    }
    else {
        console.log("Age: ".concat(age));
    }
}
greetUser("ALI AHMED SHAH");
greetUser(null);
console.log("\n\n 'TYPE ALIAS' \n");
var myName = "Ali";
var myValue = 10;
var ismail = {
    name: "Ismail",
    age: 30,
    email: "ismailahmedshahpk@gmail.com",
};
var appo = {
    name: "Appo",
    age: 25,
};
console.log(ismail);
console.log(appo);
console.log("\n\n 'INTERSECTION  TYPE ' \n");
// Create an object of type Person
var person = {
    firstName: "ISMAIL",
    lastName: "SHAH",
    age: 30
};
// Use the object
console.log("".concat(person.firstName, " ").concat(person.lastName, " is ").concat(person.age, " years old."));
console.log("\n 'Another Example' \n");
var person1 = {
    name: 'ISMAIL AHMED SHAH',
    age: 30,
    address: '123 Main St',
    phone: '0900-123-456-78'
};
console.log("".concat(person1.name, " (age: ").concat(person1.age, ") resides at ").concat(person1.address, ". You can reach ").concat(person1.name, " at ").concat(person1.phone, "."));
// Assignment by Hello Coders
console.log("\n\n\n 'Question # 01'\n");
// Create the personInfo object
var personInfo = {
    name: "Ali",
    age1: 'thirty'
};
console.log(personInfo);
console.log("\n\n'Question # 02'\n");
// Define the function
function printUnion(value) {
    console.log(value);
}
// Test the function with different types of values
printUnion("Hello");
printUnion(22);
console.log("\n\n'Question # 03'\n");
// Define the move function
function move1(direction) {
    console.log("Moving ".concat(direction));
}
// Test the function with different directions
move1("North");
move1("East");
move1("South");
move1("West");
console.log("\n\n'Question # 04'\n");
// Define the printUserInfo function
function printUserInfo(user) {
    console.log("User's name: ".concat(user.name, ", age: ").concat(user.age));
}
// Test the function with a User object
var newUser = { name: "Ali", age: 30 };
printUserInfo(newUser);
console.log("\n\n'Question # 05'\n");
// Define the printBookInfo function with a parameter of the anonymous book type
function printBookInfo(book) {
    console.log("Book title: ".concat(book.title, ", Author: ").concat(book.author));
}
var book = { title: "Web Programming", author: "Ismail Ahmed Shah" };
printBookInfo(book);
console.log("\n\n'Question # 06'\n");
// Define the student object
var student = {
    name: "Ali",
    age: 30,
    address: {
        city: "California",
        country: "USA"
    }
};
// Test accessing the student's properties
console.log("Student's name:", student.name);
console.log("Student's age:", student.age);
console.log("Student's city:", student.address.city);
console.log("Student's country:", student.address.country);
