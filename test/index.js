var assert = require('chai').assert;
var logger = require('../index');

describe('test logger', function () {
	it('should log Aiyo !', function (done) {
		assert.equal(typeof(logger.aiyo), 'function');
		done();
	});
	it('should log Shaa !', function (done) {
		assert.equal(typeof(logger.shaa), 'function');
		done();
	});
});