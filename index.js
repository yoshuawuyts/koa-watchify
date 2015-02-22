const wreq = require('watchify-request')
const assert = require('assert')

module.exports = kw

// Wrap `watchify-request` in koa middleware.
// @param {Function} bundler
// @return {Function*}
// @api public
function kw(bundler) {
  assert.equal(typeof bundler, 'function')
  var handler = wreq(bundler)
  return function *watchifyRequest(next) {
    const res = yield handler.bind(handler, this.req, this.res)
    if (res[0]) this.throw(err)
    this.response.body = res[1]
    yield next
  }
}
