const is = require('is_js');
const assert = require('assert');

var getArguments = function() {
    return arguments;
};
var arguments = getArguments();

describe('Test is_js', function() {
    it('is_argument', function() {
        assert(is.arguments(arguments), true);
    });

    it('is_not_argument', function() {
        assert(is.not.arguments({foo: 'bar'}), true);
    });

    it('is_date', function() {
        assert(is.date(new Date()), true);
    });

    it('is_error', function() {
        assert(is.error(new Error()), true);
    });

    it('is_function', function() {
        assert(is.function(toString), true);
    });

    it('is_nan', function() {
        assert(is.nan(NaN), true);
    });

    it('is_null', function() {
        assert(is.null(null), true);
    });

    it('is_empty', function() {
        assert(is.empty({}), true);
    });

    it('is_email', function() {
        assert(is.email('test@test.com'), true);
    });
});
