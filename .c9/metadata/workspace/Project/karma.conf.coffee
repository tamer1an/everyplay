{"filter":false,"title":"karma.conf.coffee","tooltip":"/Project/karma.conf.coffee","undoManager":{"mark":3,"position":3,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":21}},"text":"# Karma configuration"},{"action":"insertText","range":{"start":{"row":0,"column":21},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":56,"column":0}},"lines":["# Generated on Tue Jul 08 2014 19:32:02 GMT+0300 (Финляндия (лето))","module.exports = (config)->","  config.set","    # base path that will be used to resolve all patterns (eg. files, exclude)","    basePath: '..'","    # frameworks to use","    # available frameworks: https:#npmjs.org/browse/keyword/karma-adapter","    frameworks: ['jasmine']","    # list of files / patterns to load in the browser","    files: [","      'virtual-keypad/test/vendor/angular/angular.js',","      'virtual-keypad/test/vendor/angular-mocks/angular-mocks.js',","      'virtual-keypad/test/vendor/angular-sanitize/angular-sanitize.js',","      'virtual-keypad/test/vendor/ng-csv/build/ng-csv.js',","      'virtual-keypad/static/js/app.js',","      'virtual-keypad/static/js/controllers/*.js',","      'virtual-keypad/test/unit/*Spec.js'","    ]","    # list of files to exclude","    exclude: [","","    ]","    # preprocess matching files before serving them to the browser","    # available preprocessors: https:#npmjs.org/browse/keyword/karma-preprocessor","    preprocessors: {","","    }","    # test results reporter to use","    # possible values: 'dots', 'progress'","    # available reporters: https:#npmjs.org/browse/keyword/karma-reporter","    reporters: ['progress']","    # web server port","    port: 9876","    # enable / disable colors in the output (reporters and logs)","    colors: true","    # level of logging","    # possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG","    logLevel: config.LOG_INFO","    # enable / disable watching file and executing tests whenever any file changes","    autoWatch: true","    # start these browsers","    # available browser launchers: https:#npmjs.org/browse/keyword/karma-launcher","    browsers: [","      'PhantomJS',","      'Chrome',","#      'ChromeCanary',","#      'Firefox',","#      'Opera',","#      'IE'","    ]","    # Continuous Integration mode","    # if true, Karma captures browsers, runs the tests and exits","    singleRun: false","",""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":41}},"text":"      'virtual-keypad/test/unit/*Spec.js'"},{"action":"removeLines","range":{"start":{"row":12,"column":0},"end":{"row":17,"column":0}},"nl":"\n","lines":["      'virtual-keypad/test/vendor/angular-mocks/angular-mocks.js',","      'virtual-keypad/test/vendor/angular-sanitize/angular-sanitize.js',","      'virtual-keypad/test/vendor/ng-csv/build/ng-csv.js',","      'virtual-keypad/static/js/app.js',","      'virtual-keypad/static/js/controllers/*.js',"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":54},"end":{"row":12,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":7},"end":{"row":11,"column":52}},"text":"virtual-keypad/test/vendor/angular/angular.js"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":7},"end":{"row":11,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1413836432118,"hash":"382920054b0b21b7e51bb2829ba1c48ec2583fe4"}