// jshint camelcase: false
(function () {
	'use strict';

	// Make async
	window.__karma__.loaded = function () {};

	for (var file in window.__karma__.files) {
		if (/spec\.js$/.test(file)) {
			tests.push(file.replace(/^\/base\//, 'http://localhost:9876/base/'));
		}
	}

	require.config({
		urlArgs: "bust=" + (new Date()).getTime(),

		// Set baseUrl for Karma
		baseUrl: 'http://localhost:9876/base/js',

		deps: ['config'],

		// Location of tests
		paths: {

			// Location of tests
			spec: '../test/spec',
			specs: '../test/specs'
		}
	});

	require(['spec'], function (spec) {

		// Load all specs
		require(spec.specs, function () {

			// Start Karma
			window.__karma__.start();
		});
	});
}());
