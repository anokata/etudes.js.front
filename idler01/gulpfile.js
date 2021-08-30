const { series, parallel } = require('gulp');
const { src, dest } = require('gulp');

function defaultTask(cb) {
    cb();
    console.log(arguments.callee.name);
}

function one(c){ console.log("one"); c();}
function two(c){ console.log(arguments.callee.name); c(); }
function thr(c){ console.log(arguments.callee.name); c(); }

exports.build = defaultTask;
exports.ott = series(one, two, thr);
exports.par = parallel(one, two, thr);
exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'));
};
