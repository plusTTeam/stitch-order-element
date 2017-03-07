'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var config = {
  paths: {
	html: ['./*.html'],
	get allFiles(){
	  return [].concat(this.html);
	}
  }
};

var server = {
  dev: {
	port: 5000,
	logPrefix: 'Element',
	server: {
	  index: 'app.html',
	  baseDir: '.'
	},
	files: config.paths.allFiles,
	notify: false
  },
  get config(){
	return this.dev;
  }
};

gulp.task('browserSync', function(){
  browserSync.init(server.config);
});

gulp.task('serve', gulp.series('browserSync'));