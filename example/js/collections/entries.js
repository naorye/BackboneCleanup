define([
    'Underscore',
    'Backbone',
    'models/entry'
], function(_, Backbone, EntryModel) {
    var EntriesCollection = Backbone.Collection.extend({
        model: EntryModel
    });
    return EntriesCollection;
});