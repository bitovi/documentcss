module.exports = function(grunt){
	grunt.loadNpmTasks('documentjs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		documentjs: {
			sites: {
				"pages": {
					"parent": "home",
					"dest": "_documentcss.com",
					"glob": {
						"pattern": "pages/*.md"
					},
					"templates": "theme/templates",
					"static": "theme/static"
				},
				"example": {
					"parent": "Styles",
					"dest": "_documentcss.com/examples",
					"glob": {
						"pattern": "./node_modules/documentjs/{styles,site/default/static/styles}/**/*.{less,css,md}"
					},
					"templates": "theme/templates",
					"static": "theme/static"
				},
				"guides": {
					"parent": "live-style-guide",
					"dest": "_documentcss.com/docs",
					"glob": {
						"pattern": "./node_modules/documentjs/docs/livestyleguide/**/*.md"
					},
					"templates": "theme/templates",
					"static": "theme/static"
				}
			}
		},
		connect: {
			server: {
				options: {
					base: '_documentcss.com',
					livereload: true,
					open: true
				}
			}
		}
	});

	var sites = grunt.config('documentjs.sites');

	for(site in sites){
		grunt.config('watch.' + site, {
			files: sites[site].glob.pattern,
			tasks: ['documentjs:' + site],
			options: {
				livereload: true
			}
		});

		grunt.config('watch.forceBuild' + site, {
			files: sites[site].glob.pattern,
			tasks: ['documentjs:' + site + ':forceBuild'],
			options: {
				livereload: true
			}
		});
	}

	grunt.registerTask('build', function(options){
		if(options.indexOf('forceBuild')!==-1){
			for(site in sites){
				grunt.config('documentjs.sites.' + site + '.forceBuild', true);
			}
		}

		grunt.task.run('documentjs');
	});

	grunt.registerTask('generate', function(options){
		if(options){
			for(site in sites){
				grunt.task.run('build:' + options, 'connect:server', 'watch')
			}
		}else {
			grunt.task.run('documentjs', 'connect:server', 'watch');
		}
	});

	grunt.registerTask('default', ['generate:forceBuild']);

}