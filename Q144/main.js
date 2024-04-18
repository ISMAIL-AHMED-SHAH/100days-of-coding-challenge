// Question 144: Explain the use of the Promise.all() method with an example.
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
// Using Promise.all to wait for multiple promises to resolve
var promise1 = Promise.resolve(3);
var promise2 = 4 * 5;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 1000, "baz");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // Outputs: [3, 42, "baz"]
});
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.
