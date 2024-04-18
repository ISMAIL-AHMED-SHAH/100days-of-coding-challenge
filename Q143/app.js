// Example Promise that resolves after a delay
var delayedPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var success = Math.random() < 0.5; // Simulate success or failure randomly
        if (success) {
            resolve("Success!");
        }
        else {
            reject(new Error("Failure!"));
        }
    }, 2000); // Resolve or reject after 2 seconds
});
// Using .then() to handle successful resolution
delayedPromise.then(function (result) {
    console.log("Promise resolved:", result);
}).catch(function (error) {
    console.error("Promise rejected:", error.message);
});
