define([
	'BackboneCleanup',
	'app',
	'views/single-view',
	'views/nested-view'
], function(Backbone, app, SingleView, NestedView) {

	var Router = Backbone.CleanupRouter.extend({
		routes: {
			'': 'index',
			'single-view': 'singleView',
			'nested-view': 'nestedView'
		},
		index: function() {
			this.navigate('single-view', {trigger: true});
		},
		singleView: function() {
			var view = new SingleView();
			view.render();
			$('#view').empty().append(view.$el);

			this.markCurrentView(view);
		},
		nestedView: function() {
			var view = new NestedView();
			view.render();
			$('#view').empty().append(view.$el);

			this.markCurrentView(view);
		}
	});
	return Router;
});
