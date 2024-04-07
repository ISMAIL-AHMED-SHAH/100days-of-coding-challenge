// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.
// Get the current date and time
var currentDate = new Date();
// Get the current hour (in 24-hour format)
var currentHour = currentDate.getHours();
// Check different time slots and print appropriate message
if (currentHour < 12) {
    console.log("Good Morning");
}
else if (currentHour < 18) {
    console.log("Good Afternoon");
}
else if (currentHour) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}
// This simple check helps us greet users appropriately based on the time of day.
