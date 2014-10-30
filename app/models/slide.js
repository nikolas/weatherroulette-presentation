import DS from 'ember-data';

var Slide = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string')
});

Slide.reopenClass({
    FIXTURES: [
        {
            id: 1,
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
            id: 2,
            body: '<h1>Who am I?</h1>' +
                '<h1>Nik Nyby</h1>' +
                '<h2><a href="https://github.com/nikolas" target="_blank"' +
                '>github.com/nikolas</a></h2>' +
                '<h2><a href="mailto:niknyby@gmail.com"' +
                '>niknyby@gmail.com</a></h2>' +

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
            id: 3,
            body: '<h1>What is ' +
                '<img height="100" src="ccnmtl.png" />?</h1>' +

                '<p style="font-size: 1.2em;">' +
                'The <strong>C</strong>olumbia ' +
                '<strong>C</strong>enter ' +
                'for <strong>N</strong>ew <strong>M</strong>edia ' +
                '<strong>T</strong>eaching and <strong>L</strong>earning' +
                '</p>' +

                '<p>' +
                'CCNMTL has been around for 15 years and we have 35 people on our team.' +
                '</p>' +

                '<p>' +
                'Dedicated to the <strong>purposeful</strong> use of technology in education. ' +
                '</p>' +
                
                '<p>' +
                'We develop custom educational software and original multimedia content.' +
                '</p>' +
                
                '<p>' +
                'We rely on a range of languages, frameworks, and services. ' +
                'We\'ve mostly used Backbone for complex client-side applications, and ' +
                'Weather Roulette is CCNMTL\'s first Ember project.' +
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
            id: 4,
            body: '<h1>WACEP</h1>' +
            '<ul>' +
            '<li>WACEP is a series of short courses in Climate Risk Management and Water Resource Management.</li>' +
            '<li>A partnership between Caribbean universities, Columbia\'s Earth Institute, and UMass Amherst.</li>' +
            '<li>WACEP is funded by the US Department of State, and managed by USAID and HED.</li>' +
            '<li><a href="http://waceponline.org/credits/" target="_blank">waceponline.org/credits/</a></li>' +
            '</ul>' +

            '<p>' +
            'WACEP is intended to address the urgency of climate change and adaptation strategies &mdash; ' +
            'particularly in places with ' +
            'limited fresh water supply.' +
            '</p>' +
            
            '<p>' +
            'The courses are currently only offered for credit ($), but they intend to open them to the public ' +
            'next year.' +
            '</p>'
        },
        {
            id: 5,
            body: '<h1>Weather Roulette?</h1>' +
                '<p><a href="https://github.com/ccnmtl/wacep" target="_blank"' +
                '>github.com/ccnmtl/wacep</a></p>' +

                '<p>This is a climate prediction game that\'s a part of the WACEP curriculum. ' +
                'Weather Roulette is meant to teach students about probabalistic reasoning, forecast reliabality, ' +
                'and decision-making tools in relation to weather and climate.' +
                '</p>' +

                '<p>Students invest in items of clothing, which represent weather outcomes:</p>' +
                '<img width="650" src="items.png" />' +

                '<p>Based on simulated weather forecasts:</p>' +
                '<img width="650" src="forecast.png" />'
        },
        {
            id: 6,
            body: '<p>The player\'s progress is displayed below the betting ' +
                'area as a spreadsheet:</p>' +
                '<img width="650" src="spreadsheet.png" />' +
                '<p>And the weather observations are also displayed as a ' +
                'line graph:</p>' +
                '<img width="650" src="graph.png" />'
        },
        {
            id: 7,
            body: '<p>Also, the application contains different games ' +
                'containing different forecast and climate data for ' +
                'students to play:</p>' +
                '<img width="650" src="games.png" />'
        },
        {
            id: 8,
            body: '<h1>Why was Ember useful?</h1>' +
                '<dt><em>Organization</em></dt>' +
                '<dd><ul><li>' +
                'Using ember-cli is a good way to keep the application ' +
                'organized without having to think about it too much. ' +
                '</li></ul></dd>' +

                '<dt><em>Computed Properties</em></dt>' +
                '<dd><ul><li>' +
                'The betting inputs give reliable feedback to the ' +
                'user and never mess up. (Except for some rounding/percentage ' +
                'bugs, but that\'s my fault not Ember\'s.)' +
                '</li></ul></dd>' +

                '<dt><em>Testing</em></td>' +
                '<dd><ul><li>' +
                'I don\'t have extensive unit tests written for Weather ' +
                'Roulette, but using ember-cli\'s ' +
                '<code>generate</code> and <code>destroy</code> commands ' +
                'ensures the ' +
                'test suite is kept somewhat up to date as I develop the ' +
                'application.' +
                '</li></ul></dd>'
        },
        {
            id: 9,
            body: '<h1>Where did Ember seem to get in the way?</h1>' +
                '<p>' +
                'Connecting Ember Data to Django ' +
                '(using django-rest-framework) wasn\'t so straight-forward. ' +
                'I did expect there to be some hurdles here. I ended up ' +
                'overriding django-rest-framework ' +
                'in random places to make it behave like ' +
                'ActiveModel::Serializer from Rails so I can use ' +
                '<code>DS.RESTAdapter</code>.' +
                '</p>' +
                '<p>' +
                'I know there\'s ways to customize Ember Data\'s idea of ' +
                'the API, but I didn\'t figure that out and customizing ' +
                'django-rest-framework worked out fine.' +
                '</p>'
        },
        {
            id: 10,
            body: '<h1>Demo</h1>' +
                '<p>' +
                '<a href="http://wacep.stage.ccnmtl.columbia.edu/site_media/WeatherRoulette/dist/" ' +
                'target="_blank">' +
                'wacep.stage.ccnmtl.columbia.edu/site_media/WeatherRoulette/dist/' +
                '</a>' +
                '</p>'
        }
    ]
});

export default Slide;
