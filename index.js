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
  var handler = wreq(bundler)
  return function *watchifyRequest(next) {
    handler(this.req, this.res, function(err, body) {
      if (err) this.throw(err)
      next()
    }.bind(this))
  }
}
