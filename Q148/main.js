// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Define a function to be executed after a delay
function delayedFunction() {
    console.log("This code was executed after a delay of 2 seconds.");
}
// Call setTimeout() to schedule the execution of delayedFunction() after 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);
// Another function to be executed after 3 seconds
function secondFunction() {
    console.log("This code was executed after a delay of 3 seconds.(3000 miliseconds)");
}
setTimeout(secondFunction, 3000);
