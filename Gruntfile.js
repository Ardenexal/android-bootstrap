/**
@toc
2. load grunt plugins
3. init
4. setup variables
5. grunt.initConfig
6. register grunt tasks

*/

'use strict';

module.exports = function(grunt) {

	/**
	Load grunt plugins
	@toc 2.
	*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');

	/**
	Function that wraps everything to allow dynamically setting/changing grunt options and config later by grunt task. This init function is called once immediately (for using the default grunt options, config, and setup) and then may be called again AFTER updating grunt (command line) options.
	@toc 3.
	@method init
	*/
	function init(params) {
		/**
		Project configuration.
		@toc 5.
		*/
		grunt.initConfig({
			concat: {
				devCss: {
					src:    [],
					dest:   []
				}
			},
			jshint: {
				options: {
					//force:          true,
					globalstrict:   true,
					//sub:            true,
					node: true,
					loopfunc: true,
					browser:        true,
					devel:          true,
					globals: {
						angular:    false,
						$:          false,
						moment:		false,
						Pikaday: false,
						module: false,
						forge: false
					}
				},
				beforeconcat:   {
					options: {
						force:	false,
						ignores: ['**.min.js']
					},
					files: {
						src: []
					}
				},
				//quick version - will not fail entire grunt process if there are lint errors
				beforeconcatQ:   {
					options: {
						force:	true,
						ignores: ['**.min.js']
					},
					files: {
						src: ['**.js']
					}
				}
			},
			uglify: {
				options: {
					mangle: false
				},
				build: {
					files:  {},
					src:    'android-bootstrap.js',
					dest:   'android-bootstrap.min.js'
				}
			},
			less: {
				development: {
					options: {
					},
					files: {
						"android-bootstrap.css": "android-bootstrap.scss",
						"base.css": "base.scss"
					}
				}
			},
			cssmin: {
				dev: {
					src: ['android-bootstrap.css'],
					dest: 'android-bootstrap.min.css'
				}
			},/*,
			karma: {
				unit: {
					configFile: publicPathRelativeRoot+'config/karma.conf.js',
					singleRun: true,
					browsers: ['PhantomJS']
				}
			}*/
            // Compiles Sass to CSS and generates necessary files if requested
            compass: {
                options: {
                    sassDir: '<%= yeoman %>/lib',
                    cssDir: 'dist/',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman %>/',
                    javascriptsDir: '<%= yeoman %>/',
                    fontsDir: '<%= yeoman %>/styles/fonts',
                    importPath: '<%= yeoman %>/bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images/generated',
                    httpFontsPath: '/styles/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    raw: 'Sass::Script::Number.precision = 10\n'
                },
                dist: {
                    options: {
                        generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                    }
                },
                server: {
                    options: {
                        debugInfo: true
                    }
                }
            }
		});
		
		
		/**
		register/define grunt tasks
		@toc 6.
		*/
		// Default task(s).
		// grunt.registerTask('default', ['jshint:beforeconcat', 'less:development', 'concat:devJs', 'concat:devCss']);
		grunt.registerTask('default', ['jshint:beforeconcatQ', 'less:development', 'cssmin', 'uglify:build']);
	
	}
	init({});		//initialize here for defaults (init may be called again later within a task)

};