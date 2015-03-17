# toClassName
Transforms arguments into a className string suitable for React.

Inspired by Jed Watson's [classnames] (https://github.com/JedWatson/classnames).

See [JSPerf] (http://jsperf.com/toclassname) tests.

## Example Usage
```
toClassName('foo', 'bar'); // 'foo bar'
toClassName(['foo', 'bar', false]); // 'foo bar'
toClassName('foo', {bar: true}); // 'foo bar'
toClassName({foo: true}, {bar: true}); // 'foo bar'
toClassName({foo: true, bar: true}); // 'foo bar'
```