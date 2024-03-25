// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// Define a function to create a flexible object with customizable keys
function createFlexibleObject(key1: string, value1: any, key2: string, value2: any, key3: string, value3: any) {
    // Create an empty object
    let flexibleObject: { [key: string]: any } = {};

    // Assign values to the specified keys
    flexibleObject[key1] = value1;
    flexibleObject[key2] = value2;
    flexibleObject[key3] = value3;

    // Return the flexible object
    return flexibleObject;
}

// Create a flexible object with customizable keys
let myFlexibleObject = createFlexibleObject("name", "Ismail", "age", 30, "occupation", "AI Engineer");

// Log the flexible object
console.log(myFlexibleObject);
