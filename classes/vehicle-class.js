'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }

  wheels(number){
    return number;
  }

  wheelie(wheels) {
    if(wheels > 2) {
      return undefined;
    } else {
      return true;
    }
  }
}

class Motorcycle extends Vehicle {

  cycleNumberOfWheels() {
    return super.wheels(2);
  }

}


class Car extends Vehicle {
 
  carNumberOfWheels() {
    return super.wheels(4);
  }
  
}



// module.exports =  Car;

module.exports = {
  Car : Car,
  Motorcycle : Motorcycle,
};
