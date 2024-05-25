console.log("\nType Annotation With Variable\n");

/********************
 * TYPE ANNOTATIONS *
 ********************/

let myNumberOne: number = 29;
let myStringOne: string = "Hello, I'm TypeScript";

console.log("My Number Is:", myNumberOne);
console.log("My String Is:", myStringOne);


// Another way to write this code is as follows:
let myNumberTwo: number;
let myStringTwo: string;

myNumberTwo = 31;
myStringTwo = "Hello, I'm TypeScript";

console.log("\nMy Number Is:", myNumberTwo);
console.log("My String Is:", myStringTwo);


console.log("\n\n");


/******************************
 * DYNAMIC TYPE DETERMINATION *
******************************/

let greeting = "Hello, Coders!";
console.log(greeting);



console.log("\n\n");

/************
 * ANY TYPE *
 ************/

let myVariable: any = 32;
myVariable = "Hello, TypeScript";
console.log(myVariable)

