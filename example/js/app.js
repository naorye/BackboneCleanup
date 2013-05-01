define([
	'BackboneCleanup',
	'models/entry',
	'collections/entries',
	'views/log'
], function(Backbone, EntryModel, EntriesCollection, LogView) {

	var app = {
		initialize: function(router) {
			this.router = router;
			this.entries = new EntriesCollection();

			var view = new LogView({
				collection: this.entries
			});
			view.render();
			$('#log-placeholder').empty().append(view.$el);

			view.on('navigate', function(route) {
				this.router.navigate(route, {trigger: true});
			}, this);
		},
		log: function(name) {
			var entry = new EntryModel({ name: name });
			this.entries.add(entry);
		}
	};

	return app;
});