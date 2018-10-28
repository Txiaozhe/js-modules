'use strict';

// Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

const assert = require('assert');
let obj = {};

function test(...args) {
    console.log('kkk', args);
}

Reflect.apply(test, this, [1, 2], 1);

describe('Reflect', () => {
    it('Object success set property', () => {
        assert.equal(Object.defineProperty(obj, 'name', {
            configurable: false,
            writable: true,
            enumerable: true,
            value: 'mmm'
        }).name, 'mmm');
    });

    it('Reflact success set property', () => {
        assert.equal(Reflect.defineProperty(obj, 'name', {
            configurable: false,
            writable: true,
            enumerable: true,
            value: 'mmm'
        }), true);
    });

    it('hasNameProperty', () => {
        assert.equal(Reflect.has(obj, 'name'), true);
    });
});
