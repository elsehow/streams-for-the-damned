var $		 = require('jquery')
var Kefir    	 = require('kefir')
var pressStream  = Kefir.fromEvents(document.body, 'keydown')

var leftStream = pressStream.filter(function (ev) {
  if (ev.which == 37) return ev
}).map(function (ev) { 
  return -1 
})

var rightStream = pressStream.filter(function (ev) {
  if (ev.which == 39) return ev
}).map(function (ev) {
  return 1
})






//var posStream = Kefir.merge([leftStream, rightStream]).scan(function (acc, cur) {
//  return acc += cur
//}, 50)
//
////side effect!
//posStream.onValue(function (pos) {
//  $('#dot').css('left', pos + '%')
//})
