define([
	'Underscore',
	'BackboneCleanup',
	'app',
	'views/single-view',
	'text!templates/nested-view.html'
], function(_, Backbone, app, SingleView, nestedViewTemplate) {
	var NestedView = Backbone.CleanupView.extend({
		className: 'nested-view',
		template: _.template(nestedViewTemplate),
		events: {
			'click .add-view': 'addView'
		},
		render: function() {
			app.log('Render: NestedView (' + this.cid + ')');

			var template = this.template();
			this.$el.html(template);
		},
		cleanup: function() {
			app.log('Cleanup: NestedView (' + this.cid + ')');
		},
		addView: function() {
			var view = new SingleView();
			this.$el.append(view.$el);
			view.render();
			this.setNestedView(view);
		}
	});
	return NestedView;
});
