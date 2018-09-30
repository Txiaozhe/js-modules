const assert = require('assert');

function MacBook() {
    this.cost = function () {return 997}
    this.screenSize = function () {return 11.6}
}

// decorator 1
function Memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}

// decorator 2
function Engraving(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}

// decorator 3
function Insurance(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    }
}

const mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

describe('Decorator', function() {
    it('cost should be 1522', function() {
        assert.equal(mb.cost(), 1522);
    });

    it('screenSize should be 11.6', function() {
        assert.equal(mb.screenSize(), 11.6);
    });
});
