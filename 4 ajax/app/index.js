var $ = require('jquery')
var _ = require('lodash')
var Kefir = require('kefir')
var dateSelector = require('./src/dateSelector.js')
var myCoolGraph = require('./src/myCoolGraph.js')

var setup = function() {
  dateSelectionStream = dateSelector(document)
  myCoolGraph(document, dateSelectionStream)
}

$(document).on('ready', setup)

