define([
    'Underscore',
    'Backbone'
], function(_, Backbone) {
    var EntryModel = Backbone.Model.extend({
        defaults: {
            name: 'no-name'
        }
    });
    return EntryModel;
});