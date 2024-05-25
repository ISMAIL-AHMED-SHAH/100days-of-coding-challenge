
console.log("\n'*Union Types*'\n");


// Declaring a variable with a union type
let myVariable: boolean | number;

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

let myVar: string | number;

myVar = "Hello"; // Valid assignment
console.log(myVar)

myVar = 22;       // Valid assignment
console.log(myVar)



console.log("\n\n\n'*Literal Types*'\n");

// Defining a type with literal values
type Direction = 'up' | 'down' | 'left' | 'right';

// Function to move in a specific direction
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
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
function setColor(color: "red" | "green" | "blue"): void {
    console.log(`Setting color to ${color}`);
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
let username: string | null = "Glicher";
let age: number | null = 29;

function greetUser(username:string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}`);
    }
    if (age === null) {
        console.log("Age: Unknown");
        
    } else {
        console.log(`Age: ${age}`);
        
    }
}

greetUser("ALI AHMED SHAH");
greetUser(null)



console.log("\n\n 'TYPE ALIAS' \n");

type MyString = string;

let myName: MyString = "Ali";

type myType = string | number;

let myValue: myType = 10;

// another example
type student = {
    name: string;
    age: number;
    email?: string;
};

const ismail: student = {
    name: "Ismail",
    age: 30,
    email: "ismailahmedshahpk@gmail.com",
};

const appo: student = {
    name: "Appo",
    age: 25,
};

console.log(ismail);
console.log(appo);


console.log("\n\n 'INTERSECTION  TYPE ' \n");


// Define two types representing different sets of properties
type Name = { firstName: string; lastName: string };
type Age = { age: number };

// Define an intersection type combining the properties of Name and Age
type Person = Name & Age;

// Create an object of type Person
const person: Person = {
    firstName: "ISMAIL",
    lastName: "SHAH",
    age: 30
};

// Use the object
console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);


console.log("\n 'Another Example' \n");

type FirstType = {
    name: string;
    age: number;
};

type SecondType = {
    address: string;
    phone: string;
};

type CombinedType = FirstType & SecondType;

const person1: CombinedType = {
    name: 'ISMAIL AHMED SHAH',
    age: 30,
    address: '123 Main St',
    phone: '0900-123-456-78'
};


console.log(`${person1.name} (age: ${person1.age}) resides at ${person1.address}. You can reach ${person1.name} at ${person1.phone}.`);




  // Assignment by Hello Coders
console.log("\n\n\n 'Question # 01'\n");

// Define literal types for age
type Age1 = number | 'one' | 'two' | 'thirty' | 'fourty' | 'five'; // Extend as needed

// Define the object type
type PersonInfo = {
  name: string;  
  age1: Age1;
};  

// Create the personInfo object
const personInfo: PersonInfo = {
  name: "Ali",  
  age1: 'thirty'     
};  

console.log(personInfo);


console.log("\n\n'Question # 02'\n");

// Define the function
function printUnion(value: string | number): void {
    console.log(value);
}    

// Test the function with different types of values
printUnion("Hello"); 
printUnion(22);  



console.log("\n\n'Question # 03'\n");
// Define the type literal Direction
type Direction1 = "North" | "East" | "South" | "West";

// Define the move function
function move1(direction: Direction1) {
    console.log(`Moving ${direction}`);
}    

// Test the function with different directions
move1("North"); 
move1("East"); 
move1("South"); 
move1("West"); 


console.log("\n\n'Question # 04'\n");

// Define the type alias User
type User = {
    name: string;
    age: number;
};    

// Define the printUserInfo function
function printUserInfo(user: User) {
    console.log(`User's name: ${user.name}, age: ${user.age}`);
}    

// Test the function with a User object
const newUser: User = { name: "Ali", age: 30 };
printUserInfo(newUser);


console.log("\n\n'Question # 05'\n");

// Define the printBookInfo function with a parameter of the anonymous book type
function printBookInfo(book: { title: string, author: string }){
    console.log(`Book title: ${book.title}, Author: ${book.author}`);
}    

const book = { title: "Web Programming", author: "Ismail Ahmed Shah" };
printBookInfo(book); 


console.log("\n\n'Question # 06'\n");

// Define the student object
const student = {
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
  

















  
