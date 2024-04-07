// Question 106: Determine if a given year is a leap year using comparison operators.
// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
// Function to determine if a given year is a leap year
function isLeapYear(year) {
    // Check if the year is divisible by 4 and not divisible by 100, or if it's divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2022)); // Outputs: true
console.log(isLeapYear(1920)); // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
