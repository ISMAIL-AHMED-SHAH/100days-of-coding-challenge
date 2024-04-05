// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Define the interface for the student template
interface Student {
    name: string;
    age: number;
    classes: string[];
}

// Define an example student
const exampleStudent: Student = {
    name: "ismail ahmed shah",
    age: 30,
    classes: ["Chemistry ", "Computer Science", "Biology"]
};

// Log the details of the example student
console.log(exampleStudent);

