console.log("\n'+++INTERFACE+++\n");
var Ali = {
    name: "Ali",
    age: 30,
};
console.log(Ali);
console.log("\n'+++INTERFACE METHOD AND PARAMETERS+++\n");
// Create an object that adheres to the 'Person' interface
var Sarah = {
    name: "Sarah",
    age: 29,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Sarah.greet("Hello, Ali!");
console.log("\n\n'+++INTERFACE DECLARATION AND REOPENING+++\n");
//Object Creation
var userSettings = {
    theme: "dark",
    font: "Arial",
    sidebar: "left",
    external: true
};
console.log(userSettings);
var labrador = /** @class */ (function () {
    function labrador() {
        this.type = "dog";
    }
    labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return labrador;
}());
var labrador1 = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
var myCar = {
    brand: "Toyota",
    model: "Alentra"
};
var Labrador = /** @class */ (function () {
    function Labrador() {
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var myDog = {
    type: "dog",
    bark: function () {
        console.log("Woof!");
    }
};
