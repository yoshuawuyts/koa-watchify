/**
 * Module dependencies.
 */
var wreq   = require('watchify-request')
var assert = require('assert')

/**
 * Expose `kw`.
 */
module.exports = kw

/**
 * Wrap `watchify request` in koa middleware.
 *
 * @param {Function} bundler
 * @return {GeneratorFunction}
 */
function kw(bundler) {
  return function *watchifyRequest(next) {
    var handler = wreq(bundler)
    handler(this.req, this.res, function(err, body) {
      if (err) this.throw(err)
      next()
    }.bind(this))
  }
}
