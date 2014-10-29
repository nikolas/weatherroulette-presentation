import Ember from 'ember';

export default Ember.View.extend({
    keyPress: function() {
        Ember.debug('view:presentation keyPress');
    }
});
