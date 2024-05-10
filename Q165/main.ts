console.log("\n'TYPE ANNOTATIONS WITH FUNCTION'\n");


// Function to calculate the volume of a box
function calculateBoxVolume(length: number, width: number, height: number): number {
    return length * width * height;
  }
  
  // Calling the function with valid arguments
  const length1 = 4;
  const width = 3;
  const height = 2;
  const volume = calculateBoxVolume(length1, width, height);
  console.log(`The volume of the box is: ${volume}`);
  

  
  console.log("\n\n'* OPTIONAL AND DEFAULT PARAMETER *'\n");

// Optional Parameters:
function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
      console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  greetOptional("Ali"); // Output: "Hello, Ali!"
  greetOptional("Alina", 22); // Output: "Hello, Alina! You are 22 years old."
  


  console.log("\n\n");
  // Default Parameters:
  function greetDefault(name: string, age: number = 25) {
      console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    
    greetDefault("Ali"); // Output: "Hello, Ali! You are 25 years old."
    greetDefault("Alina", 22); // Output: "Hello, Alina! You are 22 years old."
    
    

    console.log("\n\n");
    // Function to greet a user with a default message
    function greetUser(name: string, message: string = "Hello") {
        console.log(`${message}, ${name}!`);
    }
    
    // Calling the function with different scenarios
    greetUser("Ali"); // Output: "Hello, Ali!"
    greetUser("Alina", "Hi"); // Output: "Hi, Alina!"
    greetUser("Marina", "Welcome"); // Output: "Welcome, Marina!"
    
    
    
    console.log("\n\n'* FUNCTION REST PARAMETER *'\n");
  // Function to calculate the sum of numbers
function calculateSum(...numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  

  // Calling the function with different numbers
  const sum1 = calculateSum(1, 2, 3);        // Output: 6
  const sum2 = calculateSum(5, 10, 15, 20);  // Output: 50
  const sum3 = calculateSum(2, 4, 6, 8, 10); // Output: 30
  
  console.log("Sum 1:", sum1);
  console.log("Sum 2:", sum2);
  console.log("Sum 3:", sum3);
  

  
  console.log("\n\n' * ARROW FUNCTION * '\n");
  // Arrow function to double a number
const doubleWithArrow = (num: number): number => num * 2;

// Calling the arrow function
console.log(doubleWithArrow(5)); // Output: 10
console.log(doubleWithArrow(10)); // Output: 20



console.log("\n\n' * ANONYMOUS FUNCTION * '\n");
// Anonymous function to triple a number
const triple = function(num: number): number {
    return num * 3;
  };
  
  // Calling the anonymous function
  console.log(triple(4)); // Output: 12
  console.log(triple(7)); // Output: 21
  

  console.log("\n\n' * * VOID & NEVER * * '\n"); 
// void
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined).
  }
  
  // never
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop).
    }
  }
  
// Calling the greet function
greet("Ali"); // Output: "Hello, Ali!"

// Calling the noReturnValue function
noReturnValue();   // No output, as it doesn't return anything explicitly

// Calling the throwError function
try {
  throwError("\nSomething went wrong!");
} catch (error) {
  console.error(error.message);   // Output: "Something went wrong!"
}



console.log("\n\n'**THE END**'\n");