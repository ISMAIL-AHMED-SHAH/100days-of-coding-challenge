// Question 129: Explain the difference in behavior of the 'this' keyword between traditional functions and arrow functions.

interface Person {
    name: string;
    greet(): void;
  }
  
  const person: Person = {
    name: 'Ali',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  person.greet(); // Outputs: Hello, John
  
  const greetFunction: () => void = person.greet;
  greetFunction(); // Error: 'this' implicitly has type 'any'

  