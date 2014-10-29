import DS from 'ember-data';

var Slide = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string')
});

Slide.reopenClass({
    FIXTURES: [
        {
            id: 1,
            body: '<h1>Who am I?</h1>' +
                '<h1>Nik Nyby</h1>' +
                '<h2><a href="https://github.com/nikolas" target="_blank"' +
                '>github.com/nikolas</a></h2>' +

                '<p>' +
                'I learned how to use Ember while working at ' +
                '<a href="http://to.be" target="_blank">' +
                '<img height="100" src="tobe.svg" />' +
                '</a></p>' +

                '<p>and now I work at ' +
                '<a href="http://ccnmtl.columbia.edu/" target="_blank">' +
                '<img height="100" src="ccnmtl.png" />' +
                '</a> as part of the programming team.' +
                '</p>'
        },
        {
            id: 2,
            body: '<h1>What is ' +
                '<img height="100" src="ccnmtl.png" />?</h1>' +

                '<p style="font-size: 1.2em;">' +
                'The <strong>C</strong>olumbia ' +
                '<strong>C</strong>enter ' +
                'for <strong>N</strong>ew <strong>M</strong>edia ' +
                '<strong>T</strong>eaching and <strong>L</strong>earning' +
                '</p>' +

                '<p>' +
                'An office of around 30 professionals at Columbia University.' +
                '</p>' +

                '<p>' +
                'Explores the refinement of teaching and learning, possibly ' +
                'with technology or media.' +
                '</p>' +

                '<p>Here\'s a few projects from CCNMTL:</p>' +
                '<ul>' +
                '<li><a href="http://mediathread.info/" target="_blank"' +
                '>mediathread.info</a>' +
                '<img style="margin-left: 8px; margin-bottom: -40px;" ' +
                'src="mediathread.png" />' +
                '</li>' +

                '<li style="margin-top: 45px;">More here: ' +
                '<a href="http://ccnmtl.columbia.edu/portfolio/"' +
                '>ccnmtl.columbia.edu/portfolio/</a></li>' +
                '</ul>'
        },
        {
            id: 3,
            body: '<h1>First, a Public Service Announcement</h1>' +

                '<h2>' +
                '<a href="http://www.gnu.org/software/librejs/" ' +
                'target="_blank"' +
                '>gnu.org/software/librejs</a>' +

                '<img height="100" src="gnu.png" ' +
                'style="margin-bottom: -40px;" />' +
                '</h2>' +

                '<span class="blink">Seeking JavaScript programmers</span>'
        },
        {
            id: 4,
            body: '<h1>Weather Roulette?</h1>' +
                '<p><a href="https://github.com/ccnmtl/wacep" target="_blank"' +
                '>github.com/ccnmtl/wacep</a></p>' +

                '<p>A climate prediction game.</p>' +

                '<p>Students invest in items of clothing:</p>' +
                '<img width="650" src="items.png" />' +

                '<p>Based on simulated weather forecasts:</p>' +
                '<img width="650" src="forecast.png" />'
        },
        {
            id: 5,
            body: '<p>The player\'s progress is displayed below the betting ' +
                'area as a spreadsheet:</p>' +
                '<img width="650" src="spreadsheet.png" />' +
                '<p>And the weather observations are also displayed as a ' +
                'line graph:</p>' +
                '<img width="650" src="graph.png" />'
        },
        {
            id: 6,
            body: '<p>Also, the application contains different games ' +
                'containing different forecast and climate data for ' +
                'students to play:</p>' +
                '<img width="650" src="games.png" />'
        },
        {
            id: 7,
            body: '<h1>Why was Ember useful?</h1>' +
                '<ul>' +
                '<dt><em>Computed Properties</em></dt>' +
                '<dd><ul><li>The betting inputs give reliable feedback to the ' +
                'user and never mess up.</li></ul></dd>' +
                '</ul>' +
                '<h1>Where did Ember seem to get in the way?</h1>'
        }
    ]
});

export default Slide;
