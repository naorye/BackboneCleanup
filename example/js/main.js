require.config({
	paths: {
		jQuery: '../assets/js/jquery-1.9.0.min',
		Underscore: '../assets/js/underscore-min',
		Backbone: '../assets/js/backbone-min',
		BackboneCleanup: '../../backbone.cleanup-amd',
		text: '../assets/js/text'
	},
	shim: {
		'jQuery': {
			exports: '$'
		},
		'Underscore': {
			exports: '_'
		},
		'Backbone': {
			deps: [
				'Underscore',
				'jQuery'
			],
			exports: 'Backbone'
		}
	}
});

require([
	'Backbone',
	'router',
	'app'
], function(Backbone, Router, app) {

	var router = new Router();
	app.initialize(router);

	Backbone.history.start();
});