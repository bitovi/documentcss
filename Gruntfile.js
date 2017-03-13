module.exports = function(grunt){
	grunt.loadNpmTasks('documentjs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		documentjs: {
			sites: {
				"pages": {
					"parent": "home",
					"dest": "./",
					"glob": {
						"pattern": "pages/*.md",
						"ignore": "{pages/guides.md,pages/guides/**/*,pages/styles.md}"
					},
					"templates": "theme/donejs/templates",
					"static": "theme/donejs/static"
				},
				"examples/styles": {
					"parent": "Styles",
					"dest": "examples/styles",
					"glob": {
						"pattern": "{pages/styles.md,theme/donejs/static/styles/**/*.{less,css,md}}",
					},					
					"templates": "theme/donejs/templates",
					"static": "theme/donejs/static"
				},				
				"examples/demos": {
					"parent": "demos",
					"dest": "examples/demos",
					"glob": {
						"pattern": "{pages/demos/index.md,pages/demos/**/*.md}"
					},
					"templates": "pages/demos/templates",
					"static": "theme/donejs/static"
				},
				"guides": {
					"parent": "guides",
					"dest": "docs",
					"glob": {
						"pattern": "{pages/guides/*.md,pages/guides/**/*.md}"
					},
					"templates": "theme/donejs/templates",
					"static": "theme/donejs/static"
				}
			}
		},
		connect: {
			server: {
				options: {
					livereload: true,
					open: true,
					port: 4000
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
		options = options || {};
		if(typeof options.forceBuild != 'undefined'){
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
