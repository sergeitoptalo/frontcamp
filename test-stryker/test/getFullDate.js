require('../src/getFullDate.js');
var assert = require('assert');

describe('Time', function () {
    describe('add zeroes to time', function () {
        it('should return 03:17 from input 3:17', function () {
            assert.equal(addZeroesToTime('Wed Apr 04 2018 3:17:58 GMT+0300 (Belarus Standard Time)'), '03:17');
        });
    });
});

describe('Month', function () {
    describe('get month from number', function () {
        it('should return January on parameter 0', function () {
            assert.equal(monthNameFromNumber(1), 'January');
        });
    });
});

describe('Full date', function () {
    describe('get month from number', function () {
        it('should return transformed date', function () {
            assert.equal(getFullDate('Wed Apr 04 2018 3:17:58 GMT+0300 (Belarus Standard Time)').date, 'April 4');
        });
        it('should return transformed time', function () {
            assert.equal(getFullDate('Wed Apr 04 2018 3:17:58 GMT+0300 (Belarus Standard Time)').time, '03:17');
        });
    });
});
