define([
	'jQuery',
	'Underscore',
	'Backbone',
	'collections/entries',
	'text!templates/log.html'
], function($, _, Backbone, EntriesCollection, logTemplate) {
	var LogView = Backbone.View.extend({
		className: 'log',
		template: _.template(logTemplate),
		events: {
			'click .single-view-anchor': 'goToSingleView',
			'click .nested-view-anchor': 'goToNestedView'
		},
		initialize: function() {
			this.collection.on('add', this.render, this);
		},
		render: function() {
			var template = this.template({
				entries: this.collection.toJSON()
			});
			this.$el.empty().html(template);
		},
		goToSingleView: function() {
			this.trigger('navigate', 'single-view');
		},
		goToNestedView: function() {
			this.trigger('navigate', 'nested-view');
		}
	});
	return LogView;
});
