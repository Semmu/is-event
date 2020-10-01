'use strict';

const isOdd = require('is-odd');

module.exports = function isEvent(value) {
	return isOdd(value);
}

