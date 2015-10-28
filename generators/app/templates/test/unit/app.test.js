/* global before, beforeEach, after, afterEach, it, describe */
'use strict';
import assert from 'assert';
import Application from '../../dist/app.js';

// Tests may also be written in ES6
describe('Test Suite', () => {
	var app;
	
	beforeEach(() => {
		app = new Application();
	});
	
	it('should load app', function(){
		var actual = app.name;
		var expected = '\n\t\tWelcome to my app.\n\t\tThis app is written with ES6.\n\t';
		
		assert(app);
		assert.equal(actual, expected);
	});
});