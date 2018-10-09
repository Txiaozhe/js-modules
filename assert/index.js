const assert = require('assert');

function test(opts) {
    assert(opts.name, 'opts.name is required');
}

test({age: 11, name: ''});
