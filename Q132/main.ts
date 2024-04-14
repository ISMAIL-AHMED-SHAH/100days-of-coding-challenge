//Question 132: Discuss the difference between default and named exports in JavaScript modules.

//export default
import findFirstVowel from "./export_default";

findFirstVowel("ismail");

//named Export
import { name, greet, student, TRIO } from "./named_export";

console.log(name); //variable
greet(); //function
let score = new student(); //class
console.log(score);
console.log(TRIO); //objetc