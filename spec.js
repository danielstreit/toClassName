var assert = require("assert");
var toClassName = require('./toClassName.js');

describe('toClassName', function () {
  'use strict';

  it('should return an empty string for no input', function() {
    assert.equal(toClassName(), '');
  });

  it('returns an empty string for an empty configuration', function() {
    assert.equal(toClassName({}), '');
  });

  it('should join strings with a space between each argument', function() {
    assert.equal(toClassName('one', 'two', 'three'), 'one two three');
  });

  it('should ignore falsy values and numbers', function() {
    assert.equal(toClassName('one', 0, null, undefined, true, 'two', 3), 'one two');
  });

  it('should be trimmed', function() {
    assert.equal(toClassName('', 'one', {}, ''), 'one');
  });

  it('should support arrays', function() {
    assert.equal(toClassName(['one', 'two', 'three']), 'one two three');
  });

  it('should convert object keys with truthy values to className', function() {
    assert.equal(toClassName({
      one: true,
      x: false,
      y: 0,
      two: 1,
      z: null,
      three: {}
    }), 'one two three');
  });

  it('should support mixed arguments', function() {
    assert.equal(toClassName({one: true}, 'two', 0, ['three']), 'one two three');
  });

  it('should recurse arrays', function() {
    assert.equal(toClassName(['one', ['two', { three: true, blah: false }, null], 'four']), 'one two three four');
  });
});
