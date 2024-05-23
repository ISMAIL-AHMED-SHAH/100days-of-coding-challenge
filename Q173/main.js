console.log("\n===TYPE ASSERTIONS===\n");
// let data1: any = 1000;
// // Type assertion to treat "data" as a string
// console.log((data1 as string).repeat(3)); // will throw error on Runtime
// repeat method doesn't work on number,  its a string method
var data = "1000";
// Type assertion to treat "data" as a string
console.log(data.repeat(3)); // "100010001000"
console.log("\n\n");
var data2 = "Run";
// Type assertion to treat "data" as a string
console.log(data2.repeat(3)); // "RunRunRun"
console.log("\n\n");
var data3 = "12345";
if (typeof data3 === "string") {
    console.log(data3.repeat(3)); // "123451234512345"
    // let inputElement = document.getElementById("username") as HTMLInputElement;
    // if (inputElement) {
    //   inputElement.value = "Hello, World!";
    // }
}
