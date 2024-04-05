// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = Circle | Rectangle;

// Define the interface for a circle
interface Circle {
    kind: "circle";
    radius: number;
}

// Define the interface for a rectangle
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

// Function to describe a shape
function describeShape(shape: Shape) {
    if (shape.kind === "circle") {
        console.log("Circle:");
        console.log("Radius:", shape.radius);
    } else if (shape.kind === "rectangle") {
        console.log("Rectangle:");
        console.log("Width:", shape.width);
        console.log("Height:", shape.height);
    }
}

// Example usage
const myCircle: Circle = { kind: "circle", radius: 5 };
const myRectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };

// Describe the circle
describeShape(myCircle);

// Describe the rectangle
describeShape(myRectangle);

