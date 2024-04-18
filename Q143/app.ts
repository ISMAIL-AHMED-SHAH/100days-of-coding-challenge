

// Example Promise that resolves after a delay
const delayedPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() < 0.5; // Simulate success or failure randomly
        if (success) {
            resolve("Success!");
        } else {
            reject(new Error("Failure!"));
        }
    }, 2000); // Resolve or reject after 2 seconds
});

// Using .then() to handle successful resolution
delayedPromise.then((result) => {
    console.log("Promise resolved:", result);
}).catch((error) => {
    console.error("Promise rejected:", error.message);
});
