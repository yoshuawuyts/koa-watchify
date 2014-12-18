var test = require('tape')
var koa  = require('koa')
var wreq = require('./')

test('it should catch input errors', function(t) {
  var x = 'lolololol, I should be a unit test. But Im not.'
  t.end()
})
