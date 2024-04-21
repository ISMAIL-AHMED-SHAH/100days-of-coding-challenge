// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
// Explanation:
// Initially, the code logs "Start" synchronously to the console.
// Then, the setTimeout() function is called, which schedules the provided callback function to be executed after a delay of 0 milliseconds.
// While the setTimeout() function is asynchronous, its callback is placed in the callback queue after the delay.
// The event loop continuously checks if the call stack is empty. Once it's empty, it moves the first event (in this case, the setTimeout callback) from the callback queue to the call stack for execution.
// Finally, the code logs "End" synchronously to the console.
