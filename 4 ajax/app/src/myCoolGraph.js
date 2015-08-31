var $ = require('jquery')
var _ = require('lodash')

var apiResponseStream = require('./apiQuerier.js')

var timeseries = function (ev) { return ev.dataset.data }

var datapoint  = function (t, v) { 
  var h = v + "px"
  var style = 'height: ' + h + '; display: inline-block; width: 30px; background: #00ffff;'
  var template = '<div class="datapoint" style="' + style + ';"></div>'
  return $(template)
}

//side-effecty 
var drawGraph = function (data, $container) {
  $container.empty(); 
  _.map(data, function (datum) {
    $container.append(datapoint(datum[0], datum[1]))
  })
}

var setup = function (doc, dateStream) {

  //setup
  var template = '<div id="graphContainer" style="overflow-x: scroll; white-space: nowrap;" ></div>'
  doc.write(template)
  var $c      = $('#graphContainer')
  var render  = function (data) { drawGraph(data, $c) }

  //streams
  var breathStream = dateStream.flatMap(apiResponseStream)

  //side-effects
  breathStream.map(timeseries).onValue(render)

  return 
}

module.exports = setup 
