import Ember from 'ember';

export default Ember.View.extend({
    keyPress: function(e) {
        Ember.debug('view:presentation keyPress');
    }
});
