import Ember from 'ember';

export default Ember.ObjectController.extend({
    nextId: function() {
        var newId = parseInt(this.get('id'), 10) + 1;
        return newId;
    }.property('id'),

    prevId: function() {
        var newId = parseInt(this.get('id'), 10) - 1;
        return Math.max(newId, 1);
    }.property('id')
});
