// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

// Function to simulate a dice roll and return a random integer between 1 and 6
function rollDice1(): number {
    // Generate a random number between 1 and 6 (inclusive)
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Return the random number representing the dice roll
    return randomNumber;
}

const diceRollResult = rollDice1();
console.log("Dice roll result:", diceRollResult); 
// Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.
