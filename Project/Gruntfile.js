module.exports = function(grunt) {
    var paths = [
        '',
    ];

    var config = {
        jade: {
            files: []
        },
        stylus:{
            files: []
        },
        clean:{
            paths: []
        }
    };

    for( var i in paths ){
        if( !paths.hasOwnProperty(i) ) continue;
        var path = paths[i];

        config.jade.files.push({
            cwd:    path + 'templates/jade/app',
            src:    '*.jade',
            dest:   path + 'static/html',
            expand: true,
            ext:    '.html'
        });

        config.stylus.files.push({
            cwd: path + 'templates/stylus',
            src: '*.styl',
            dest: path + 'static/css',
            expand: true,
            ext: '.css',
            filter: function(fileName) {
                //return true only if file's basename doesn't start with an underscore
                var parts = fileName.split('/');
                return (parts.length && parts[parts.length - 1][0] !== '_');
            }
        });

        config.clean.paths.push( path + 'static/html/**/*' )
        config.clean.paths.push( path + 'static/css/**/*' )
    }

    grunt.initConfig({
        "jade": {
            default: {
                options: {
                    pretty: true
                },
                files: config.jade.files
            }
        },
        "stylus": {
            default: {
                options: {
                    compress: false
                },
                files: config.stylus.files
            }
        },
        "clean": {
            default: {
                src: config.clean.paths
            }
        },
        "modernizr": {
            dist: {
                "devFile" : "remote",
                "outputFile" : "static/js/vendor/modernizr/modernizr.js",
                "extra" : {
                    "shiv" : true,
                    "printshiv" : false,
                    "load" : true,
                    "mq" : false,
                    "cssclasses" : true
                },
                "uglify" : false,
                "parseFiles" : false
            }
        },
        "bower-install-simple": {
            options: {
                color:       true,
                production:  true,
                directory:   "static/js/vendor"
            }
        },

        watch: {
            files: ['**/*.jade','**/*.styl'],
            tasks: ['clean', 'jade', 'stylus']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'clean',
        'jade',
        'stylus'
    ]);

    grunt.registerTask('bower-install', [
        'bower-install-simple',
        'modernizr'
    ]);
};
