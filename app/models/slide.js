import DS from 'ember-data';

var Slide = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string')
});

Slide.reopenClass({
    FIXTURES: [
        {
            id: 1,
            presentation: 1,
            title: 'Slide 1',
            body: '<h1>Who am I?</h1>' +
                '<h1>Nik Nyby</h1>' +
                '<h2><a href="https://github.com/nikolas" target="_blank"' +
                '>github.com/nikolas</a></h2>' +
                '<p>' +
                'I learned how to use Ember while working as a developer at ' +
                '<a href="http://to.be" target="_blank">' +
                '<img height=100 src="tobe.svg" />' +
                '</a> ' +
                'and now I\'m a programmer at ' +
                '<a href="http://ccnmtl.columbia.edu/" target="_blank">' +
                '<img height=100 src="ccnmtl.png" />' +
                '</a>.' +
                '</p>'
        },
        {
            id: 2,
            presentation: 1,
            title: 'Slide 1',
            body: '<h1>A Public Service Announcement</h1>' +
                '<h2><a href="http://www.gnu.org/software/librejs/" ' +
                'target="_blank"' +
                '>gnu.org/software/librejs</a>'
        }
    ]
});

export default Slide;
