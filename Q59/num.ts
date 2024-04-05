// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function createAdder(addend: number): (number: number) => number {
    return function(number: number): number {
        return number + addend;
    };
}

const addFive = createAdder(5); // Creates an adder that adds 5 to any number
const addTen = createAdder(10); // Creates an adder that adds 10 to any number

console.log(addFive(10)); // Output: 15 (10 + 5)
console.log(addTen(20)); // Output: 30 (20 + 10)


