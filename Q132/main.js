"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//export default
const export_default_1 = __importDefault(require("./export_default"));
(0, export_default_1.default)("ismail");
//named Export
const named_export_1 = require("./named_export");
console.log(named_export_1.name); //variable
(0, named_export_1.greet)(); //function
let score = new named_export_1.student(); //class
console.log(score);
console.log(named_export_1.TRIO); //objetc
