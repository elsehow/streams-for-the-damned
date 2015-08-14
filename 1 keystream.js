var Kefir = require('kefir') 

var keystream  = Kefir.fromEvents(document.body, 'keydown')





//
//var charstream = keystream.map(function (ev) {
//  return String.fromCharCode(ev.which)
//})
//
//var stringStream = charstream.scan(function (acc, cur) {
//  return acc += (cur + ' ')
//})
//
////side effect 
////note that it doesnt return anything!
//stringStream.onValue(function (ev) {
//  console.log(ev)
//})
