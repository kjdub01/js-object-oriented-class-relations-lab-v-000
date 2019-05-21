let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    
    store.drivers.push(this);
  }
  
  
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this);
  }
  
  
}

let tripId = 0;

class Trip {
  constructor(driverId, passengerId) {
    this.id = ++tripId;
    this.driverId = driverId;
    this.passengerId = passengerId;
    
    store.trips.push(this);
  }
  
  driver() {
    return store.
  }
}