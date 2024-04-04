// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// This function prints numbers from 1 to 5 using a loop
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        // Uses `let` for loop variable `i`
        console.log(i);
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let` if we console it, will throw the error
}
printNumbers();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
