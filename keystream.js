Kefir = require('kefir') 
var presstream = Kefir.fromEvents(document.body, 'keydown')

fromChar = function (ev) {
  return String.fromCharCode(ev.which)
}

var keystream = presstream.map(fromChar)

var stringStream = keystream.scan(function (acc, cur) {
  return acc += (cur + ' ')
})

stringStream.onValue(function (ev) {
  console.log(ev)
})
