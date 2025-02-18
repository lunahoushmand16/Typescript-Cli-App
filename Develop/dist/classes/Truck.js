// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // It should initialize all the properties declared above
    // Ensure the truck has exactly 4 wheels; if not provided, assign default wheels
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // Call parent class (Vehicle) constructor
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        // TODO: Ensure the truck always has 4 wheels
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
        // I can right for loop like this as well for above
        // this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
    // TODO: Implement the tow method from the AbleToTow interface
    // This method should check if the vehicle's weight is within the truck's towing capacity
    // If yes, log a success message; otherwise, log that the vehicle is too heavy
    tow(vehicle) {
        console.log(`${this.make} ${this.model} is attempting to tow ${vehicle.make} ${vehicle.model}.`);
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`${vehicle.make} ${vehicle.model} is being towed successfully.`);
        }
        else {
            console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class
    // Call the parent class's printDetails method first
    // Then log all Truck-specific details such as VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    printDetails() {
        super.printDetails(); // Call Vehicle's printDetails method
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        // TODO: Print details of each wheel
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
}
// Print details of the wheels can be like this or above 
//     this.wheels.forEach((wheel, index) => {
//       console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
//     });
//   }
// }
// Export the Truck class as the default export
export default Truck;
