(function($, Backbone) {

    if (Backbone.Cleanup) return;

    Backbone.Cleanup = true;

    var routeStripper = /^[#\/]/;
    Backbone.CleanupRouter = Backbone.Router.extend({
        navigate: function(fragment) {
            // Filter cases where navigate doesn't navigate
            if (!Backbone.History.started) return false;
            var frag = (fragment || '').replace(routeStripper, '');
            if (Backbone.history.fragment == frag) return;

            if (this.currentView) {
                this.currentView.cleanupAll();
                this.currentView = null;
            }
            Backbone.Router.prototype.navigate.apply(this, arguments);
        },
        markCurrentView: function(view) {
            this.currentView = view;
        }
    });

    Backbone.CleanupView = Backbone.View.extend({
        constructor: function() {
            this.nestedViews = [];
            Backbone.View.prototype.constructor.apply(this, arguments);
        },
        setNestedView: function(view) {
            this.nestedViews.push(view);
        },
        cleanup: function() {
            // This method should be overridden
        },
        cleanupAll: function() {
            for (var i in this.nestedViews) {
                this.nestedViews[i].cleanup();
            }
            this.nestedViews = null;
            this.cleanup();
        }
    });
})(jQuery, Backbone);