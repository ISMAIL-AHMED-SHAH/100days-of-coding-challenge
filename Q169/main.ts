console.log("\n'===ENUMS IN TYPESCRIPT==='\n");
// Define an enum called Days representing days of the week
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const today: Days = Days.Tuesday;

// Print today's name using enum index
console.log(`Today is ${Days[today]}`);


console.log("\n\n");
// Define an enum called Direction representing directions
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let playerDirection: Direction = Direction.Right;
console.log(playerDirection); // Output: 3


console.log("\n\n");
// Define an enum called Fruit with custom numeric values, enabling access by both value and name
enum Fruit {
    Apple = 1,
    Banana = 2,
    Orange = 4,
}

let myFruit: Fruit = Fruit.Apple;
console.log(myFruit); // // Print the value of myFruit  // Output: 1


console.log("\n\n");
  // Print the name of the enum member with value 2 (Banana)
  console.log(Fruit[2]); // Output: Banana
  

  
  
  