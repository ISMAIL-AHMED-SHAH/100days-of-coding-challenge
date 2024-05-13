console.log("\n'===TUPLE IN TYPESCRIPT==='\n");
// Defining a tuple
let person: readonly [string, number] = ["Ali", 30];
// Accessing elements of the tuple
console.log(person[0]);
console.log(person[1]); 

// Trying to push a new element into a tuple or modify any element (will result in an error)
// Modifying elements of the tuple
// person[0] = "Alina";
// person[1] = 25;
// person.push("coding")
console.log(person);

console.log("\n\n");
// Defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true];

// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);



console.log("\n\n");





// Define a tuple type for person information

type personInfo = readonly [string, number, boolean]

const displayPersonInfo : (person:personInfo) => void = (person:personInfo) : void => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driving License: ${hasDriverLicense ? 'Yes' : 'No'}`);
}

let person1:personInfo = ['ismail', 30, true]
let person2:personInfo = ['appo', 25, false]

displayPersonInfo(person1)
displayPersonInfo(person2)


