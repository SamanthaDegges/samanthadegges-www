var awspublish = require('gulp-awspublish');
var connect = require('connect');
var fs = require('fs');
var gulp = require('gulp');
var liveReload = require('gulp-livereload');
var serveStatic = require('serve-static');

/**
 * Deploy the public facing site to S3.
 */
gulp.task('deploy', function() {
  var aws = JSON.parse(fs.readFileSync('./aws.json'));
  var publisher = awspublish.create({
    key: aws.key,
    secret: aws.secret,
    bucket: 'www.samanthadegges.com',
  });
  var headers = {
    'Cache-Control': 'max-age=86400000, public', //1 day
  };

  gulp.src('./dist/**')
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});

/**
 * Serve our static site locally on port 3000.
 */
gulp.task('server', function(next) {
  var server = connect();
  server.use(serveStatic('./dist')).listen(3000, next);
});

/**
 * Run our local development server, and watch for changes.
 */
gulp.task('run', ['server'], function() {
  liveReload.listen();

  // If anything changes, refresh the site.
  gulp.watch('./dist/**').on('change', liveReload.changed);
});

/**
 * Default task.
 */
gulp.task('default', ['run']);
