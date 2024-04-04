//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function mixedTypeSum(num1: number, num2Str: string): number {
    // Convert the string to a number using parseFloat()
    const num2 = parseFloat(num2Str);
  
    // Return the sum after conversion
    return num1 + num2;
  }
  
  // Example usage
  const number1 = 10;
  const number2String = "5";
  const sum = mixedTypeSum(number1, number2String);
  
  console.log("Sum:", sum);

  
  


  