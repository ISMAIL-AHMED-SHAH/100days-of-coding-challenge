// Question 114 : Iterate over a map of student IDs and Names, and log each pair to the console.

// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Ali");
students.set(2, "Bilal");
students.set(3, "Rabia");

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.