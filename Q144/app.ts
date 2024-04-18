

// Example Promises representing asynchronous tasks
const promise11 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Result 1"), 1000); // Resolves after 1 second
});

const promise22 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Result 2"), 2000); // Resolves after 2 seconds
});

const promise33 = new Promise<string>((resolve, reject) => {
    setTimeout(() => reject(new Error("Error occurred")), 1500); // Rejects after 1.5 seconds
});

// Using Promise.all() to handle multiple Promises
Promise.all([promise11, promise22, promise33])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("At least one promise was rejected:", error.message);
    });
