// LOGICAL OPERATORS

console.log("\n 'OR' OPERATOR");
// || (OR)
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

console.log("\n");
if (1 || 0) { // works just like if( true || false )
    console.log('truthy!');
}

console.log("\n\n");
// Most of the time, OR || is used in an if statement to test if any of the given 
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log('The office is closed.');
}

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour > 18 || isWeekend) {
  console.log('The office is closed.'); // it is the weekend
}

console.log("\n");
console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

console.log("\n\n");
// Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

true || console.log("not printed");
false || console.log("printed");

console.log(null || 2 || undefined);   //  2

console.log((1) || 2 || (3));    //   1



console.log("\n\n\n 'AND OPERATOR' ");
// && (AND)
console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false


console.log("\n");
let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
  console.log('The time is 12:30');
}

if (1 && 0) { // evaluated as true && false
    console.log("won't work, because the result is falsy");
}

console.log("\n");
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

console.log("\n");
let x = 1;

(x > 0) && console.log('Greater than zero!');

console.log(1 && null && 2); 

console.log((1) && (2));  // output  2

console.log(null || 2 && 3 || 4);   //  output  3


console.log("\n\n\n 'NOT OPERATOR'");
// ! (NOT)
console.log(!true); // false
console.log(!0); // true

console.log(!!"non-empty string"); // true
console.log(!!null); // false

console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false



console.log("\n\n\n NULLISH COALESING OPERATOR '??' ");
// Nullish coalescing operator '??'
// let result = (a !== null && a !== undefined) ? a : b;

let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

console.log("\n");
let user1 = "Ali";

console.log(user1 ?? "Anonymous"); // Ali (user is not null/undefined)


console.log("\n");
let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

console.log(firstName1 ?? lastName1 ?? nickName1 ?? "Anonymous"); // Supercoder

console.log(firstName1 || lastName1 || nickName1 || "Anonymous"); // Supercoder

console.log("\n");
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

console.log("\n");
let height1 = null;
let width = null;

let area = (height1 ?? 100) * (width ?? 50);

console.log(area); // 5000

// let area2 = height2 ?? 100 * width2 ?? 50;

// let area3 = height3 ?? (100 * width3) ?? 50;

console.log("\n");
// Using ?? with && or ||
let n = (1 && 2) ?? 3; // Works

console.log(n); // 2



console.log("\n\n\b 'THE END'");
