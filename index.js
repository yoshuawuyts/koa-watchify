const wreq = require('watchify-request')
const thenify = require('thenify')
const assert = require('assert')

module.exports = kw

// Wrap `watchify-request` in koa middleware.
// @param {Object} bundler
// @return {Function*}
function kw(bundler) {
  assert.equal(typeof bundler, 'object')
  const handler = thenify(wreq(bundler))

  // Koa middleware.
  // @param {Function} next
  // @return {Promise}
  return function *watchifyRequest(next) {
    const ctx = this

    return yield handler(this.req, this.res)
      .then(success)
      .catch(failure)

    function success(res) {
      ctx.response.body = res
    }

    function failure(err) {
      ctx.throw(err)
    }
  }
}
