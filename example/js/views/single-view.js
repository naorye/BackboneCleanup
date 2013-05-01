define([
	'Underscore',
	'BackboneCleanup',
	'app',
	'text!templates/single-view.html'
], function(_, Backbone, app, singleViewTemplate) {
	var SingleView = Backbone.CleanupView.extend({
		className: 'single-view',
		template: _.template(singleViewTemplate),
		render: function() {
			app.log('Render: SingleView (' + this.cid + ')');

			var template = this.template();
			this.$el.html(template);
		},
		cleanup: function() {
			app.log('Cleanup: SingleView (' + this.cid + ')');
		}
	});
	return SingleView;
});
