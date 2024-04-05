// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum VehicleCategory {
    Car = 'Car',
    Truck = 'Truck',
    Motorcycle = 'Motorcycle'
}

const myVehicle: VehicleCategory = VehicleCategory.Car;
console.log(`My vehicle belongs to the category: ${myVehicle}`);

  