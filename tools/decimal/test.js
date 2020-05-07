const Decimal = require('decimal.js');

let x, y, z;

x = new Decimal(123.4567)
y = new Decimal('123456.7e-3')
z = new Decimal(x)
console.log(x.equals(y) && y.equals(z) && x.equals(z));

x = new Decimal('0xff.f')            // '255.9375'
y = new Decimal('0b10101100')        // '172'
z = x.plus(y)                        // '427.9375'
console.log('2: ', z.toBinary());
console.log('2: ', z.toBinary(13));

const num = new Decimal(5).div(8).mul(100).toFixed(2) + '%'
console.log('3: ', num);
