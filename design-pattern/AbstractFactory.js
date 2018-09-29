var assert = require('assert');

function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'sliver';
}

Car.prototype.drive = 1;
Car.prototype.breakDown = 2;

function Truck(options) {
    this.state = options.state || 'used';
    this.whileSize = options.whileSize || 'large';
    this.color = options.color || 'blue';
}

const AbstractVehicleFactory = (function() {
    let types = {};

    return {
        getVehicle: function(type, customizations) {
            const Vehicle = types[type];
            return (Vehicle) ? new Vehicle(customizations) : null;
        },
        registerVehicle: function(type, Vehicle) {
            const proto = Vehicle.prototype;
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }

            return AbstractVehicleFactory;
        }
    }
})();

AbstractVehicleFactory.registerVehicle('car', Car);
AbstractVehicleFactory.registerVehicle('truck', Truck);

const car = AbstractVehicleFactory.getVehicle('car', {
    color: 'green',
    state: 'new'
});

const truck = AbstractVehicleFactory.getVehicle('truck', {
    whileSize: 'medium',
    color: 'yellow'
});

describe('AbstractFactory', function() {
    describe('#instanceof', function() {
        it('car should be instance of Car', function() {
            assert.equal(car instanceof Car, true);
        });
    });
});
