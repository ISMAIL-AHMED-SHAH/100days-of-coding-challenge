// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    var diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
function daysUntilNewYear1() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var newYearDate = new Date(currentYear + 1, 0, 1); // January 1st of next year
    // Calculate the difference in milliseconds between the current date and New Year's date
    var differenceInMilliseconds = newYearDate.getTime() - currentDate.getTime();
    // Convert milliseconds to days
    var daysUntilNewYear = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return daysUntilNewYear;
}
// Log the result
var daysLeft = daysUntilNewYear1();
console.log("Days left until New Year: ".concat(daysLeft));
