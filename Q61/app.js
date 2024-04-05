// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "Car";
    VehicleCategory["Truck"] = "Truck";
    VehicleCategory["Motorcycle"] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
var myVehicle = VehicleCategory.Car;
console.log("My vehicle belongs to the category: ".concat(myVehicle));
