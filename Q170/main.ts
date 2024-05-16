
console.log("\n'+++INTERFACE+++\n");

// console.log("Hello, world!");

interface Person {
    name: string;
    age: number;
}

const Ali: Person = {
    name: "Ali",
    age: 30,
};

console.log(Ali);


console.log("\n'+++INTERFACE METHOD AND PARAMETERS+++\n");
// Define an interface 'Person' with a method 'greet'
interface Person2 {
    name: string;
    age: number;
    greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const Sarah: Person2 = {
    name: "Sarah",
    age: 29,
    greet(message: string) {
        console.log(`${this.name} says: ${message}`);
    },
};

Sarah.greet("Hello, Ali!"); 


console.log("\n\n'+++INTERFACE DECLARATION AND REOPENING+++\n");
// InitiaL Interface Declaration
interface Settings {
    readonly theme: string;
    font: string;
}

// Reopening for Article Page
interface Settings {
    sidebar: string;
}

// Reopening for Contact Page
interface Settings {
    external: boolean;
}

//Object Creation
const userSettings: Settings = {
    theme: "dark",
    font: "Arial",
    sidebar: "left",
    external: true
}

console.log(userSettings);



// ========'+++Built-in Interfaces in TypeScript+++'=========

// Example only for understanding of using HTMLImageElement in TypeScript:
// const imgElement: HTMLImageElement = document.createElement("img");
// imgElement.src = "image.jpg";
// imgElement.alt+ "My Image";

// if (imgElement.complete) {
    //     console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    
    // } else {
        //     imgElement.addEventListener("load", () => {
            //         console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight} `);
            
            //     });
            // }
            
            
            // console.log("\n\n'+++Interfaces vs. Type Aliases+++'\n");
            
            //  Declared using the interface keyword.
            interface PersonExInterface {
                name: string;
                age: number;
            }
            
            type PersonExType = {
                name: string;
                age: number;
            };
            
            
            interface AnimalExInterface {
                type : string;
            }
            
            // Extending and Implementing by built-in keywords
            // Can be extended by other interfaces using the extends keyword and implemented by classes using the implements keyword.
            interface Dog extends AnimalExInterface {
                bark(): void;
            }
            
            class labrador implements Dog {
                type: string = "dog";
                bark() {
                    console.log("Woof!");
                }
            }
            
            // Type Alias:
            // Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.
            
            type AnimalExType1 = {
                type: string;
            };
            
            type Monkey = AnimalExType1 & {
                bark(): void;
            };
            
            const labrador1: Monkey = {
                type: "monkey",
                bark() {
                    console.log("Woof!");
                },
            };
            
            
            // console.log("\n\n'+Compatibility+'\n");
            
            // Interface: Supports declaration merging. When you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.
            
            interface Car {
                brand: string;
            }
            
            interface Car {
                model: string;
            }
            
            const myCar: Car = {
                brand: "Toyota",
                model: "Alentra"
            };
            
            
            // console.log("\n\n'+Extensibility+'\n");

            interface Animal {
                type: string;
            }

            interface Dog extends Animal {
                bark(): void,
            }

            class Labrador implements Dog {
                type: "dog";
                bark() {
                    console.log("Woof!");
                }
            }

            type AnimalExType = {
                type: string;
            };

            type DogExType = AnimalExType & {
                bark(): void;
            };

            const myDog: DogExType = {
                type: "dog",
                bark() {
                    console.log("Woof!");
                    
                }
            }


            // console.log("\n\n'+Readability and Style+'\n");

            interface User {
                id: number;
                name: string;
                email: string;
              }


              type ID = number | string;

            type UserExType = {
                  id: ID;
                  name: string;
                  email: string;
};













              










    