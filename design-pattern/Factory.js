var assert = require('assert');

function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'sliver';
}

function Truck(options) {
    this.state = options.state || 'used';
    this.whileSize = options.whileSize || 'large';
    this.color = options.color || 'blue';
}

function VehicleFacory() {}

VehicleFacory.prototype.vehicleClass = Car;

VehicleFacory.prototype.createVehicle = function(options) {
    switch(options.vehicleType) {
        case 'car':
            this.vehicleClass = Car;
            break;
        case 'truck':
            this.vehicleClass = Truck;
            break;
        default:
            this.vehicleClass = Car;
    }

    return new this.vehicleClass(options);
}

// test
const truckFactory = new VehicleFacory();
const truck = truckFactory.createVehicle({
    vehicleType: 'truck',
    color: 'yellow',
    whileSize: 'small'
});

describe('Factory', function() {
  describe('#instanceof', function() {
    it('truck should be instance of Truck', function() {
      assert.equal(truck instanceof Truck, true);
    });
  });
});
