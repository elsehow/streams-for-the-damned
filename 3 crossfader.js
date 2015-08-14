var $		   = require('jquery')
var Kefir	   = require('kefir')

var keyFilter      = function (ev, keycode) { if (ev.which == keycode) return ev }
var rightKeyFilter = function (ev) { return keyFilter(ev, 39) }
var leftKeyFilter  = function (ev) { return keyFilter(ev, 37) }
var one 	   = function (ev) { return 1 }
var minusOne       = function (ev) { return -1 }
var sum            = function (acc, cur) { return acc += cur }
var leftGain       = function (pos) { return 100 - pos }
var rightGain      = function (pos) { return pos }

var setup = function () {

  //streams
  var pressStream  = Kefir.fromEvents(document.body, 'keydown')
  var leftStream   = pressStream.filter(leftKeyFilter).map(one)
  var rightStream  = pressStream.filter(rightKeyFilter).map(minusOne)
  var dotPosStream = Kefir.merge([leftStream, rightStream]).scan(sum, 50)
 
  //side-effects
  dotPosStream.onValue(function (pos)  { $('#dot').css('left', pos + '%') })
  dotPosStream.map(leftGain).log('set left track gain!')
  dotPosStream.map(rightGain).log('set right track gain!')

}

//main 
$(document).on('ready', setup)
