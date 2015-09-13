var $ = require('jquery')
var _ = require('lodash')

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

var setup = function (doc, breathStream) {

  //setup DOM
  var template = '<div id="graphContainer" style="overflow-x: scroll; white-space: nowrap;" ></div>'
  doc.write(template)

  //setup render functions
  var $c      = $('#graphContainer')
  var render  = function (data) { drawGraph(data, $c) }

  //side-effects
  breathStream.map(timeseries).onValue(render)

  return 
}

module.exports = setup 
