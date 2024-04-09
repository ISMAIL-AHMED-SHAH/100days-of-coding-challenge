// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
function logSeason(month) {
    var season;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid Month";
    }
    return season;
}
console.log(logSeason(9));
console.log(logSeason(27));
