// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades: number[] = [85, 90, 75, 95, 88];

// Calculate the sum of all grades
let sum: number = grades.reduce((total, grade) => total + grade, 0);

// Calculate the average grade
const average: number = sum / grades.length;

console.log("Average Grade:", average);

