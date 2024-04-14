"use strict";
//export default
//you can use this function and import it by any name you want
//it is used for single import
Object.defineProperty(exports, "__esModule", { value: true });
function findVowel(str) {
    let vowels = "aeiou";
    for (let i of str) {
        if (vowels.includes(i)) {
            console.log(`Vowel found at ${i}`);
            break;
        }
        console.log(i);
    }
}
exports.default = findVowel;
