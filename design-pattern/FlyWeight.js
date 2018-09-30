Function.prototype.implementsFor = function(parentClassOrObject) {
    if (parentClassOrObject.constructor === Function) {
        // 正常继承
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    } else {
        // 纯虚拟继承
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }

    return this;
}

// 享元对象
const CoffeeOrder = {
    serveCoffee: function(context) {},
    getFlavor: function() {}
}

function CoffeeFlavor(newFlavor) {
    const flavor = newFlavor;

    // 如果已为某功能定义了接口，则实现该功能
    if(typeof this.getFlavor === 'function') {
        this.getFlavor = function() {
            return flavor;
        }
    }

    if(typeof this.serveCoffee === 'function') {
        this.serveCoffee = function(context) {
            console.log('serving coffee flavor', flavor, ' number ', context.getFlavor());
        }
    }
}

// 为coffeeorder 实现接口
CoffeeFlavor.implementsFor(CoffeeOrder);

function CoffeeOrderContext (tableNumber) {
    return {
        getTable: function() {
            return tableNumber;
        }
    }
}

// 享元工厂对象
function CoffeeFlavorFactory() {
    const flavors = [];
    return {
        getCoffeeFalvor: function(flavorName) {
            var flavor = flavors[flavorName];
            if (flavor === undefined) {
                flavor = new CoffeeFlavor(flavorName);
                flavors[flavorName] = flavor;
            }

            return flavor;
        },
        getTotalCoffeeFlavorsMade: function() {
            return flavors.length;
        }
    }
}

// usage
testFlyWeight();

function testFlyWeight() {
    // 已订购的flavor
    const flavors = new CoffeeFlavor();

    // 订单table
    const tables = new CoffeeOrderContext();

    // 订单数量
    let ordersMade = 0;

    // CoffeeFlavorFactory 实例
    let flavorFactory;

    function takeOrders(flavorIn, table) {
        flavors[ordersMade] = flavorFactory.getCoffeeFalvor(flavorIn);
        tables[ordersMade++] = new CoffeeOrderContext(table);
    }

    flavorFactory = new CoffeeFlavorFactory();

    takeOrders("Cappuccino", 2);
    takeOrders("Cappuccino", 2);
    takeOrders("Frappe", 1);
    takeOrders("Frappe", 2);


    for (var i = 0; i < ordersMade; i++) {
        flavors[i].serveCoffee(tables[i]);
    }
    console.log('');
    console.log('table coffeeflavor object made: ', flavorFactory.getTotalCoffeeFlavorsMade());
}
