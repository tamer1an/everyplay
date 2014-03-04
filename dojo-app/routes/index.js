/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', {
        title: 'Express',

        //JQuery Google CDN
        //ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" // 2.0.3
        //ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js

        scripts: [
          //TODO: Optimize app and devide functionality to modules  'javascripts/lib/require.js',
            'javascripts/lib/jasmine-2.0.0/jasmine31.js',
            'javascripts/lib/jasmine-2.0.0/console_reporter.js',
//            'javascripts/lib/jasmine-html.js',
//            'javascripts/lib/jasmine-2.0.0/console.js',
//            'javascripts/lib/jasmine-2.0.0/boot.js',

            'javascripts/lib/modernizr.js',
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.js',
            'javascripts/lib/underscore.js',
            'javascripts/lib/backbone.js',
            'javascripts/app.js',

            'javascripts/spec/functional_tests.js'
        ]

        //production
        //scripts: ['//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js','javascripts/lib/underscore.min.js','javascripts/lib/backbone.min.js','javascripts/app.js']
    });
};