var $ = require('jquery')
var _ = require('lodash')
var spireDataStream = require('./spireAPI.js')

var timeseries    = function (ev) { return ev.dataset.data }
var datapoint     = function (datum) { return $('<div class="datapoint">yo</div>') }
var drawDatapoint = function (datum, $container) { $container.append(datapoint(datum)) }
var drawGraph     = function (data, $container) {
  $container.empty(); 
  _.map(data, drawDatapoint)
}

var setup = function (doc, dateStream) {

  //setup
  doc.write('<div id="graphContainer"></div>')
  var $c = $('#graphContainer')
  var d  = function (data) { drawGraph(data, $c) }

  //streams
  var breathStream = dateStream.flatMap(spireDataStream)
  //side-effects
  breathStream.map(timeseries).log()//.onValue(d)

  return 
}

module.exports = setup 
