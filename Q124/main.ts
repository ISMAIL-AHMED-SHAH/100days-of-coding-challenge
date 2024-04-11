
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.


// Defines an object with a name property and a method to return its name

const person = {
    name: "\n Ali",
    getName: function (){
        return this.name;
    },
};

console.log(person.getName());
// it returns the object's 'name' property using 'this'.
