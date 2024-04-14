"use strict";
//Named exports
//used for multiple import at a time with their names individually
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIO = exports.student = exports.greet = exports.name = void 0;
//defining and exporting a variable 
exports.name = "ismail";
//defining and exporting a function
function greet() {
    console.log("Hello", exports.name);
}
exports.greet = greet;
//defining and exporting a class 
class student {
    constructor() {
        this.marks = 840;
        this.grade = "A+";
    }
}
exports.student = student;
//defining and exporting an object 
exports.TRIO = {
    frnd1: "ismail",
    frnd2: "ahmed",
    frnd3: "shah"
};
