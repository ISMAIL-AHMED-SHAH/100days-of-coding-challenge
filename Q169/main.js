console.log("\n'===ENUMS IN TYPESCRIPT==='\n");
// Define an enum called Days representing days of the week
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Tuesday;
// Print today's name using enum index
console.log("Today is ".concat(Days[today]));
console.log("\n\n");
// Define an enum called Direction representing directions
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var playerDirection = Direction.Right;
console.log(playerDirection); // Output: 3
console.log("\n\n");
// Define an enum called Fruit with custom numeric values, enabling access by both value and name
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 1] = "Apple";
    Fruit[Fruit["Banana"] = 2] = "Banana";
    Fruit[Fruit["Orange"] = 4] = "Orange";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.Apple;
console.log(myFruit); // // Print the value of myFruit  // Output: 1
console.log("\n\n");
// Print the name of the enum member with value 2 (Banana)
console.log(Fruit[2]); // Output: Banana
