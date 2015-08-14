var $ = require('jquery')
var Kefir = require('kefir')
var getSelectorDate = function (ev) { return ev.target.valueAsDate }

var setup = function (doc) {

  //draw html
  var template = '<input type = "date" id = "dateSelector"> <button id="fetch">fetch my breathing data</button>'
  doc.write(template)

  //streams
  var dateSelectorEvents  = Kefir.fromEvents($('#dateSelector'), 'change')
  var buttonClickStream   = Kefir.fromEvents($('#fetch'), 'click')
  var dateSelectionStream = dateSelectorEvents.sampledBy(buttonClickStream).map(getSelectorDate)

  //returns a stream of selected dates
  return dateSelectionStream
}

module.exports = setup
