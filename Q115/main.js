// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function logDayOfWeek(dayNumber) {
    var day;
    switch (dayNumber) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
            break;
    }
    console.log("Day ".concat(dayNumber, " corresponds to ").concat(day));
}
logDayOfWeek(5); // Outputs: Friday
// Uses a switch statement to select the appropriate day based on the provided number.
