// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// In another file:
import { Person } from "./name";

const ali = new Person("Ali");
ali.greet(); // Outputs: Hello, my name is Ali
// This snippet imports the Person class and uses it to create an instance.