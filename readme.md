# obj-map-prop [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges)

Map object properties by a dict of functions.

[![npm install obj-map-prop](https://nodei.co/npm/obj-map-prop.png?mini=true)](https://npmjs.org/package/obj-map-prop/)

```js
let map = require('obj-map-prop')

let obj = {propA: '0', propB: 1, propC: 'foo', propD: 'bar'}
let result = map(obj, {
	propA: value => +value,
	propB: value => value + 1,
	propC: c => typeof c === 'function' ? c() : c
})
// {propA: 0, propB: 2, propC: 'foo'}


// keep rest of properties
let result = map(obj, {
  propA: value => +value
}, true)
// {propA: 0, propB: 1, propC: 'foo', propD: 'bar'}
```


## Credits

© 2017 Dima Yv. MIT License
