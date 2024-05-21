
// function identity2<Type>(val:Type): Type {
    //     return val;
    // }
    // // identity2(true);
    // console.log(identity2("Func called"));
    // console.log(identity2<string>("Ali"));
    // console.log(identity2<number>(99));
    
    console.log("\n'GENERICS'\n");
    
    function identity<Type>(value:Type): Type {
        return value;
    }
    
    const dateValue: Date = identity<Date>(new Date());
    const objValue: {name: string, age: number} = identity<{name:string, age:number}>({name: "Ali", age:30});
    const funcValue: () => string = identity<() => string>(() => "Hello Coderss!");
    const setValue: Set<number> = identity<Set<number>>(new Set([1, 2, 3, 4]));
    
    console.log(`Date Value: ${dateValue}`);
    console.log(`Object Value: ${JSON.stringify(objValue)}`);
    console.log(`Function Value: ${funcValue()}`);
    console.log(`Set Value: ${Array.from(setValue).join(', ')}`);
    

    console.log("\n\n");
    
    // A generic function that returns the input value as is
    function returnType<T>(val: T): T {
        return val;
      }
      
      // Usage of the generic function with different types
      const numValue: number = returnType<number>(100);
      const strValue: string = returnType<string>("Alpha");
      const boolValue: boolean = returnType<boolean>(true);
      const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);
      
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
function returnTypeEx<T>(val:T): T {
    return val;
}

console.log(returnTypeEx<number>(99));
console.log(returnTypeEx<string>("Ali"));


// Arrow Function with Generics
const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Bravo"));


//Generic Function `testType`
function testType<T>(val:T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`
}

console.log(testType<number>(99));
// Returns: "The Value Is 99 And Type Is number"

console.log(testType<string>("Charlie"));
// Returns: "The Value Is Charlie And Type Is string"


// Generic Function `multipleTypes`
function multipleTypes<T, S>(valueOne:T, valueTwo: S): String {
    return `The First Value Is ${valueOne} And Second Value is ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Delta", 100));
// Returns: "The First Value Is Osama And Second Value Is 100"

console.log(multipleTypes<string, boolean>("Echo", true));
// Returns: "The First Value Is Echo And Second Value Is true"



console.log("\n\n'GENERIC CLASSES'\n");

// Generic Class `User`
class User <T = string> {
    constructor(public value: T){}
    
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg: T): void {
        console.log(`${msg} - ${this.value}`);
        
    }
}
// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User<string>("'Foster'");
console.log(userOne.value);
userOne.show("Message");


let userTwo = new User<number | string>(99);
console.log(userTwo.value);
userTwo.show("Message");



console.log("\n\n'GENERIC AND INTERFACES'\n");

// Define Interface
interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

// Generic Class `Collection`
class Collection<T> {
    public data: T[] = [];

//Method to add an item of type `T` to the collection
add(item:T): void {
    this.data.push(item);
}

//Method to display all items in collection
showItems(): void {
    console.log(this.data);
    }
}

// Creating an istance of 'Collection' with type parameter 'Book'
let bookCollection = new Collection<Book>();
bookCollection.add({itemType: "Book", title: "Pride and Prejudice", isbn: 7001323});
bookCollection.add({itemType: "Book", title: "The Great Gatsby", isbn: 7001120});
bookCollection.add({itemType: "Book", title: "To Kill a Mockingbird", isbn: 7001100});
bookCollection.add({itemType: "Book", title: "The Catcher in the Rye", isbn: 7001101});
bookCollection.showItems();


let gameCollection = new Collection<Game>();
gameCollection.add({ itemType: "\nGame", title: "Uncharted", style: "Action", price: 125});
gameCollection.add({ itemType: "Game", title: "FIFA 21", style: "Sports", price: 99});
gameCollection.showItems();




console.log(`\n\n`);




    
    