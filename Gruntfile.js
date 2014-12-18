(function () {
    "use strict";

    module.exports = function (grunt) {

        // Project configuration.
        grunt.initConfig({
            jshint: {
                options: {
                    jshintrc: true
                },
                all: [
                    "js/**/*.js",
                    "examples/**/*.js"
                ]
            },
            jscs: {
                options: {
                    requireMultipleVarDecl: "onevar"
                },
                all: [
                    "js/**/*.js",
                    "examples/**/*.js"
                ]
            },
            watch: {
                options: {
                    livereload: true
                },
                html: {
                    files: ["examples/**/*.html"]
                },
                css: {
                    files: [
                        "css/**/*.css",
                        "examples/**/*.css"
                    ]
                },
                js: {
                    files: [
                        "js/**/*.js",
                        "examples/**/*.js"
                    ],
                    tasks: [
                        "jshint",
                        "jscs"
                    ]
                }
            }
        });

        grunt.loadNpmTasks("grunt-contrib-jshint");
        grunt.loadNpmTasks("grunt-jscs-checker");
        grunt.loadNpmTasks("grunt-contrib-watch");

        grunt.registerTask("help", function () {
            grunt.log.writeln("grunt help:      displays this message");
            grunt.log.writeln("grunt test:      checks JavaScript code style with JSHint and JSCS");
            grunt.log.writeln("grunt watch:     checks JavaScript code style,");
            grunt.log.writeln("                 automatically reloads changed example files in browser");
        });

        grunt.registerTask("default", [
            "test"
        ]);

        grunt.registerTask("install", [
            "copy"
        ]);

        grunt.registerTask("test", [
            "jshint",
            "jscs"
        ]);
    };
}())

