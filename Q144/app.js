// Example Promises representing asynchronous tasks
var promise11 = new Promise(function (resolve) {
    setTimeout(function () { return resolve("Result 1"); }, 1000); // Resolves after 1 second
});
var promise22 = new Promise(function (resolve) {
    setTimeout(function () { return resolve("Result 2"); }, 2000); // Resolves after 2 seconds
});
var promise33 = new Promise(function (resolve, reject) {
    setTimeout(function () { return reject(new Error("Error occurred")); }, 1500); // Rejects after 1.5 seconds
});
// Using Promise.all() to handle multiple Promises
Promise.all([promise11, promise22, promise33])
    .then(function (results) {
    console.log("All promises resolved:", results);
})
    .catch(function (error) {
    console.error("At least one promise was rejected:", error.message);
});
