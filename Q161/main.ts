

console.log("\n***'Arrow Functions'***\n");

let sum = (a: number, b: number) => a + b;

console.log( sum(3, 2) )

/* This arrow function is a shorter form of:

let sum = function(a, b) {
    return a + b;
};
*/


console.log("\n***'Arrow Functions'***\n");
// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
// roughly the same as: let double = function(n) { return n * 2 }
let double = n => n * 2;

console.log( double(3) );



console.log("\n***'Multi line Arrow Functions'***\n");

let sum1 = (a: number, b: number) => {   // the curly brace opens a multiline function
    let result = a + b;
    return result;
    
  };
console.log(sum(9, 7));



