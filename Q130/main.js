"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
// add fucntion is imported from math.js 
console.log((0, math_1.add)(2, 3)); // Outputs: 5
// Demonstrates importing the add function from math.ts and using it.
