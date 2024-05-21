"use strict";
// function identity2<Type>(val:Type): Type {
//     return val;
// }
// // identity2(true);
// console.log(identity2("Func called"));
// console.log(identity2<string>("Ali"));
// console.log(identity2<number>(99));
console.log("\n'GENERICS'\n");
function identity(value) {
    return value;
}
const dateValue = identity(new Date());
const objValue = identity({ name: "Ali", age: 30 });
const funcValue = identity(() => "Hello Coderss!");
const setValue = identity(new Set([1, 2, 3, 4]));
console.log(`Date Value: ${dateValue}`);
console.log(`Object Value: ${JSON.stringify(objValue)}`);
console.log(`Function Value: ${funcValue()}`);
console.log(`Set Value: ${Array.from(setValue).join(', ')}`);
console.log("\n\n");
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
const numValue = returnType(100);
const strValue = returnType("Alpha");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
//   function returnType1<T>(val:T): T {
//     return val;
//   }
//   const numValue1: number = returnType<number>(10);
//   const strValue2: string = returnType<string>("Bravo")
//   const boolValue2: boolean = returnType<boolean>(true);
//   const arrValue2: number[] = returnType<number[]>([1, 2, 3, 4]);
//   console.log(`Number Value: ${numValue1}`);
//   console.log(`String Value: ${strValue2}`);
//   console.log(`Boolean Value: ${boolValue2}`);
//   console.log(`Array Value: ${arrValue2}`);
// function identity<Type>(value: Type): Type {
//     return value;
// }
// const dateValue: Date = identity<Date>(new Date());
// const objValue: { name: string, age: number } = identity<{ name: string, age: number }>({ name: "Alpha", age: 30 });
// const funcValue: () => string = identity<() => string>(() => "Hello Coderss!");
// const setValue: Set<number> = identity<Set<number>>(new Set([1, 2, 3, 4]));
// console.log(`Date Value: ${dateValue}`);
// console.log(`Object Value: ${JSON.stringify(objValue)}`);
// console.log(`Function Value: ${funcValue()}`);
// console.log(`Set Value: ${Array.from(setValue).join(', ')}`);
console.log("\n\n");
console.log(`\n"GENERIC WITH MULTIPLE TYPES\n`);
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(99));
console.log(returnTypeEx("Ali"));
// Arrow Function with Generics
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Bravo"));
//Generic Function `testType`
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(99));
// Returns: "The Value Is 99 And Type Is number"
console.log(testType("Charlie"));
// Returns: "The Value Is Charlie And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value is ${valueTwo}`;
}
console.log(multipleTypes("Delta", 100));
// Returns: "The First Value Is Osama And Second Value Is 100"
console.log(multipleTypes("Echo", true));
// Returns: "The First Value Is Echo And Second Value Is true"
console.log("\n\n'GENERIC CLASSES'\n");
// Generic Class `User`
class User {
    constructor(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User("'Foster'");
console.log(userOne.value);
userOne.show("Message");
let userTwo = new User(99);
console.log(userTwo.value);
userTwo.show("Message");
console.log("\n\n'GENERIC AND INTERFACES'\n");
// Generic Class `Collection`
class Collection {
    constructor() {
        this.data = [];
    }
    //Method to add an item of type `T` to the collection
    add(item) {
        this.data.push(item);
    }
    //Method to display all items in collection
    showItems() {
        console.log(this.data);
    }
}
// Creating an istance of 'Collection' with type parameter 'Book'
let bookCollection = new Collection();
bookCollection.add({ itemType: "Book", title: "Pride and Prejudice", isbn: 7001323 });
bookCollection.add({ itemType: "Book", title: "The Great Gatsby", isbn: 7001120 });
bookCollection.add({ itemType: "Book", title: "To Kill a Mockingbird", isbn: 7001100 });
bookCollection.add({ itemType: "Book", title: "The Catcher in the Rye", isbn: 7001101 });
bookCollection.showItems();
let gameCollection = new Collection();
gameCollection.add({ itemType: "\nGame", title: "Uncharted", style: "Action", price: 125 });
gameCollection.add({ itemType: "Game", title: "FIFA 21", style: "Sports", price: 99 });
gameCollection.showItems();
console.log(`\n\n`);
