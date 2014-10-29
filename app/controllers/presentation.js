import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        nextSlide: function() {
            Ember.debug('controller:presentation nextSlide');
            this.set('currentSlide', this.get('nextSlide'));
        },
        prevSlide: function() {
            Ember.debug('controller:presentation prevSlide');
            this.set('currentSlide', this.get('prevSlide'));
        }
    },

    currentSlide: null,

    prevSlide: function() {
        var slides = this.get('model');
        var currentSlide = this.get('currentSlide');
        var prevSlide = slides.objectAt(slides.indexOf(currentSlide) - 1);
        if (prevSlide) {
            return prevSlide;
        } else {
            return currentSlide
        }
    }.property('currentSlide'),
    
    nextSlide: function() {
        var slides = this.get('model');
        var currentSlide = this.get('currentSlide');
        var nextSlide = slides.objectAt(slides.indexOf(currentSlide) + 1);
        if (nextSlide) {
            return nextSlide;
        } else {
            return currentSlide
        }
    }.property('currentSlide'),

    url: 'http://nikolas.us.to/weatherroulette/'
});
