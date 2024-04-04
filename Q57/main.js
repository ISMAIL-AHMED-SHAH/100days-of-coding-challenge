// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [85, 90, 75, 95, 88];
// Calculate the sum of all grades
var sum = grades.reduce(function (total, grade) { return total + grade; }, 0);
// Calculate the average grade
var average = sum / grades.length;
console.log("Average Grade:", average);
