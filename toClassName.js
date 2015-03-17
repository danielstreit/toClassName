/**
 * A more flexible replacement for React.addons.classSet, used to transform
 * arguments into a className string. Falsy values and numbers are ignored.
 * Accepts an arbitrary number of Strings, Arrays, and Objects
 *
 * Inspired by classnames by Jed Watson:
 * https://github.com/JedWatson/classnames
 *
 * See Perf tests at:
 * http://jsperf.com/toclassname
 *
 * @param {...String|Array|Object}
 *
 * @examples
 * toClassName('foo', 'bar'); // => 'foo bar'
 * toClassName(['foo', 'bar', false]); // => 'foo bar'
 * toClassName('foo', {bar: true}); // => 'foo bar'
 * toClassName({foo: true}, {bar: true}); // => 'foo bar'
 * toClassName({foo: true, bar: true}); // => 'foo bar'
 */
function toClassName() {
  'use strict';
  var classes = '';
  var arg;

  for (var i = 0; i < arguments.length; i++) {
    arg = arguments[i];
    if (!arg) {
      continue;
    }

    if ('string' === typeof arg) {
      classes += ' ' + arg;
    } else if (Object.prototype.toString.call(arg) === '[object Array]') {
      classes += ' ' + toClassName.apply(null, arg);
    } else if ('object' === typeof arg) {
      for (var key in arg) {
        if (!arg.hasOwnProperty(key) || !arg[key]) {
          continue;
        }
        classes += ' ' + key;
      }
    }
  }
  return classes.substr(1);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = toClassName;
}
