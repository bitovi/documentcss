module.exports = function(grunt){
	grunt.loadNpmTasks('documentjs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-build-control');

	grunt.initConfig({
		documentjs: {
			sites: {
				"pages": {
					"parent": "home",
					"dest": "gh-pages",
					"glob": {
						"pattern": "pages/*.md",
						"ignore": "{pages/guides.md,pages/guides/**/*,pages/styles.md}"
					},
					"templates": "theme/donejs/templates",
					"static": "theme/donejs/static"
				},
				"examples/styles": {
					"parent": "Styles",
					"dest": "gh-pages/examples/styles",
					"glob": {
						"pattern": "{pages/styles.md,theme/donejs/static/styles/**/*.{less,css,md}}",
					},
					"templates": "theme/donejs/templates",
					"static": "theme/donejs/static"
				},
				"examples/demos": {
					"parent": "demos",
					"dest": "gh-pages/examples/demos",
					"glob": {
						"pattern": "{pages/demos/index.md,pages/demos/**/*.md}"
					},
					"templates": "pages/demos/templates",
					"static": "theme/donejs/static"
				},
				"guides": {
					"parent": "guides",
					"dest": "gh-pages/docs",
					"glob": {
						"pattern": "{pages/guides/*.md,pages/guides/**/*.md}"
					},
					"templates": "theme/donejs/templates",
					"static": "theme/donejs/static"
				}
			}
		},
    copy: {
			main: {
				expand: true,
				src: 'theme-*/**',
				dest: 'gh-pages/'
			},
    },
		connect: {
			server: {
				options: {
					livereload: true,
					base: 'gh-pages',
					open: true,
					port: 4000
				}
			}
		},
    buildcontrol: {
      options: {
        dir: 'gh-pages',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:leoj3n/documentcss.git',
          branch: 'gh-pages'
        }
      },
      local: {
        options: {
          remote: '../',
          branch: 'build'
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

		grunt.task.run('documentjs', 'copy');
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
