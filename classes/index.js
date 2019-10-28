'use strict';

const VehicleConstructor = require('./vehicle-constructor');
const VehicleClass = require('./vehicle-class');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const mazda2 = new VehicleClass.Car('Mazda 3');
console.log(mazda2.name, mazda2.drive(), mazda2.stop());

const harley2 = new VehicleClass.Motorcycle('Harley');
console.log(harley2.name, harley2.wheelie(), harley2.stop());
