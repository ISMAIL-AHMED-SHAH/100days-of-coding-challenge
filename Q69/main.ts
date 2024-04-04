// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

// This function divides two numbers and finds the quotient and remainder

function divideWithRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
    // Perform division and get remainder using modulo (%)
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
  
    // Return an object with quotient and remainder properties
    return { quotient, remainder };
  }
  
  // Example usage
  const divided = divideWithRemainder(17, 5);
  console.log("Division result:", divided);
  
