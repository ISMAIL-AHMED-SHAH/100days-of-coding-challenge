// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function checkBothTrue(val1, val2) {
    return val1 && val2;
}
console.log(checkBothTrue(true, false));
// It checks two things, but since one is false, the answer is false.
console.log(("\n"));
console.log(checkBothTrue(true, true)); // Output: True
console.log(checkBothTrue(true, false)); // Output: False
console.log(checkBothTrue(false, true)); // Output: False
console.log(checkBothTrue(false, false)); // Output: False
