// Karma configuration
// Generated on Fri Oct 03 2014 22:00:00 GMT+0530 (India Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        ngHtml2JsPreprocessor: {
            moduleName: 'mapitHtml',
            stripPrefix: "app/",
            prependPrefix: "app/dist/",
        },

        // list of files / patterns to load in the browser
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/ngGeolocation/ngGeolocation.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/ui-router-extras/release/ct-ui-router-extras.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/bower_components/angular-cookies/angular-cookies.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/lodash/dist/lodash.js',
            'app/bower_components/angular-loading-bar/build/loading-bar.js',
            'http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&mkt=en-in',
            'app/js/*.module.js',
            'app/js/**/*.js',
            'app/js/*.js',
            'app/Tests/**/*.js',
            'app/Tests/*.js',
            'app/html/*.html',
            'app/html/**/*.html',
            'i18n/*.js'
        ],

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['ng-html2js']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'xml'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // you can define custom flags
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false
                    }
                },
                flags: ['--remote-debugger-port=9000']
            }
        },

        plugins: [
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
