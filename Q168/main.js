console.log("\n'===TUPLE IN TYPESCRIPT==='\n");
// Defining a tuple
var person = ["Ali", 30];
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
var article = [11, "Title One", true];
// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);
console.log(article);
// Destructuring the tuple into individual variables
var id = article[0], title = article[1], published = article[2];
console.log(id);
console.log(title);
console.log(published);
console.log("\n\n");
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driving License: ").concat(hasDriverLicense ? 'Yes' : 'No'));
};
var person1 = ['ismail', 30, true];
var person2 = ['appo', 25, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
