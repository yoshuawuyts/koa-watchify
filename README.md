# koa-watchify
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

Wraps a [browserify][browserify] or [watchify][watchify] instance into a
koa middleware.

## Installation
```bash
$ npm install koa-watchify
```

## Usage
```js
const wreq     = require('koa-watchify')
const watchify = require('watchify')
const path     = require('path')
const koa      = require('koa')
const app      = koa()

var bundle = browserify({
  entries: [path.join(process.cwd(), 'index.js')],
  fullPaths: true,
  packageCache: {},
  cache: {}
})

if ('development' == process.env.NODE_ENV) bundle = watchify(bundle)

app.use(wreq(bundle))
app.listen(process.env.port || 1337)
```

## Why?
Setting up boilerplate for `browserify` / `watchify` can be a bit annoying. This
module provides a good entry point for both development and production servers
running `koa` and `browserify`. No `gulp`, `grunt` or `make` needed.

## Contributors
- [Yoshua Wuyts](https://github.com/yoshuawuyts)
- [Hugh Kennedy](https://github.com/hughsk)

## See Also
- [watchify-request][watchify-request]
- [koa-myth][koa-myth]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/koa-watchify.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-watchify
[travis-image]: https://img.shields.io/travis/yoshuawuyts/koa-watchify.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/koa-watchify
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/koa-watchify.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/koa-watchify?branch=master
[downloads-image]: http://img.shields.io/npm/dm/koa-watchify.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-watchify

[browserify]: http://github.com/substack/node-browserify
[watchify]: http://ghub.io/watchify
[watchify-request]: https://github.com/hughsk/watchify-request
[koa-myth]: https://github.com/yoshuawuyts/koa-myth
