
//Comparison

//Numeric
console.log( 2 > 1);  // true (correct)
console.log( 2 == 1);  // false (wrong)
console.log( 2 != 1);   // true (correct)

let result = 5 > 4; // assign the result of the comparison
console.log(`${result} \n`); // true

//String Comparison
//Strings are compared letter-by-letter in the “dictionary” order.
console.log( 'Z' > 'A' ); // true
console.log( 'Ali' > 'Bilal' ); // false
console.log( 'Kamran' > 'Imran' ); // true
console.log( 'Bee' > 'Be' ); // true
console.log( 'ali' > 'Ali' ); // true
// the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).


console.log(' '); //for extra line in the terminal, for better understanding
// Comparison of different types
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1


console.log(' \n\n'); //for extra lines in the terminal, for better understanding
// For boolean values, true becomes 1 and false becomes 0.
// For example:
console.log( true == 1 ); // true
console.log( false == 0 ); // true


console.log(' \n\n');
// One of them is true as a boolean and the other one is false as a boolean.
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!


console.log(' \n\n');
//Strict Equality
console.log( 0 == false ); // true
console.log( '' == false ); // true

console.log(' \n\n');
//A strict equality operator === checks the equality without type conversion.

console.log( 0 === false ); // false, because the types are different

console.log(' \n\n');
//Comparison with null and undefined
//For a strict equality check ===
console.log( null === undefined ); // false
// For a non-strict check ==
console.log( null == undefined ); // true



console.log(' \n\n');
//For maths and other comparisons < > <= >=
//Strange result: null vs 0

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

console.log('\n\n');
// An incomparable undefined
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)
//undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.









