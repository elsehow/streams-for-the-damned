$		= require('jquery')
Kefir 		= require('kefir')
rightKeycode	= 39
leftKeycode	= 37

var pressStream = Kefir.fromEvents(document.body, 'keydown')

var leftStream = pressStream.filter(function (ev) {
  if (ev.which == leftKeycode) return ev
}).map(function (ev) { 
  return -1 
})

var rightStream = pressStream.filter(function (ev) {
  if (ev.which == rightKeycode) return ev
}).map(function (ev) {
  return 1
})

var posStream = Kefir.merge([leftStream, rightStream])
posStream = posStream.scan(function (acc, cur) {
  return acc += cur
}, 50)

posStream.onValue(function (pos) {
  $('#dot').css('left', pos + '%')
})
