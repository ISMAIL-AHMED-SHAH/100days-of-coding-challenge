console.log("\n***'Arrow Functions'***\n");
var sum = function (a, b) { return a + b; };
console.log(sum(3, 2));
/* This arrow function is a shorter form of:

let sum = function(a, b) {
    return a + b;
};
*/
console.log("\n***'Arrow Functions'***\n");
// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
// roughly the same as: let double = function(n) { return n * 2 }
var double = function (n) { return n * 2; };
console.log(double(3));
console.log("\n***'Multi line Arrow Functions'***\n");
var sum1 = function (a, b) {
    var result = a + b;
    return result;
};
console.log(sum(9, 7));
function ask(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}
ask("Do you agree?", function () { return console.log("You agreed."); }, function () { return console.log("You canceled the execution."); });
