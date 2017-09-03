"use strict";

var gulp = require('gulp');
var insert = require('gulp-insert');
var connect = require('gulp-connect');


var uglifyEs = require('uglify-es'); //  `uglify-es` for ES6 support
var composer = require('gulp-uglify/composer');
var minify = composer(uglifyEs, console);

var util = require('gulp-util');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var pkg = require('./package.json');


var srcDir = './src/';
var buildDir = './public/';
var testDir = './test/';


gulp.task('build', buildTask);
gulp.task('watch', watchTask);
gulp.task('default', ['build', 'watch']);

var header = `/*
* clasher-stat v${pkg.version}
* Released under the MIT license
* https://github.com/kausikongit/clasher-stat/blob/develop/LICENSE
*/\n\n`;

/*
 * Generate a build based on the source file
 */

function buildTask() {
    return gulp.src(srcDir + 'build.js')
        .pipe(browserify({
            insertGlobals: false
        }))
        .pipe(rename('clasherStat.bundle.js'))
        .pipe(insert.prepend(header))
        .pipe(gulp.dest(buildDir))
        .pipe(minify({}))
        .pipe(rename('clasherStat.bundle.min.js'))
        .pipe(insert.prepend(header))
        .pipe(gulp.dest(buildDir));
}


function watchTask() {
    return gulp.watch('./src/**', ['build']);
}