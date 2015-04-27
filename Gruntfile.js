module.exports = function(grunt){
	grunt.loadNpmTasks('documentjs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-npm-install');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		documentjs: {
			sites: {
				"pages": {
					"parent": "home",
					"dest": "site",
					"glob": {
						"pattern": "_pages/*.md"
					}
				},
				"example": {
					"parent": "Styles",
					"dest": "site/examples",
					"glob": {
						"pattern": "./node_modules/documentjs/{styles,site/default/static/styles}/**/*.{less,css,md}"
					}
				},
				"guides": {
					"parent": "live-style-guide",
					"dest": "site/guides",
					"glob": {
						"pattern": "./node_modules/documentjs/docs/livestyleguide/**/*.md"
					}
				}
			}
		},
		connect: {
			server: {
				options: {
					base: 'site',
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
	}

	grunt.registerTask('build', ['npm-install', 'documentjs']);
	grunt.registerTask('default', ['documentjs', 'connect:server', 'watch'])

}