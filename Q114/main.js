// Question 114 : Iterate over a map of student IDs and Names, and log each pair to the console.
// Creates a Map to store student IDs (keys) and names (values)
var students = new Map();
students.set(1, "Ali");
students.set(2, "Bilal");
students.set(3, "Rabia");
// Iterates over the Map and logs each student ID and name
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
// This loop goes through each student and logs their ID and name.
