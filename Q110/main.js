// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else if (score >= 50) {
        return "E";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(99)); // Outputs: A
console.log(assignGrade(55)); // Outputs: E
console.log(assignGrade(45)); // Outputs: F
