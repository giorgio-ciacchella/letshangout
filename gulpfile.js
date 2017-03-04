
const config = require('./webpack/webpack.config.js');
const frontendConfig = require('./webpack/frontend.webpack.config.js');
const webpack = require('webpack');
const gulp = require('gulp');
const path = require('path');
const nodemon = require('nodemon');

/**
*
*@return null
**/
function onBuild(done) {
  return (err, stats) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('frontend-build', function(done) {
  webpack(frontendConfig).run(onBuild(done));
});

gulp.task('frontend-watch', function() {
  webpack(frontendConfig).watch(100, onBuild());
});

gulp.task('backend-build', function(done) {
  webpack(config).run(onBuild(done));
});

gulp.task('backend-watch', function() {
  webpack(config).watch(100, function(err, stats) {
    onBuild()(err, stats);
    nodemon.restart();
  });
});

gulp.task('run', ['frontend-watch', 'backend-watch'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
});
