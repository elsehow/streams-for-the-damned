var $                   = require('jquery')
var _                   = require('lodash')
var Kefir               = require('kefir')
var dateSelector        = require('./src/dateSelector.js')
var apiResponseStream   = require('./src/apiQuerier.js')
var myCoolGraph         = require('./src/myCoolGraph.js')

// whenever the user selects a date, query the API for data on that date
var setup = function() {
  // write a date selector the dom 
  // return a stream of selected dates
  var selectedDatesStream = dateSelector(document)
  selectedDatesStream.log('date selected!')
  // apiResponseStream returns a stream - a stream that only 1 event (or error) will ever come through
  // we flatMap these streams, turning the events of many streams into the events of one stream
  // specifically, we flatMapLatest  - if we have a bunch of requests (selectedDateStream events) coming thorugh,
  // flatMapLatest assures that we will only see responses related to the most recent one.
  // (consider the situation where many requests go out, 
  // and one that was originated at t0 completes AFTER one that originated at t1
  // causing us to see stale data).
  // so, flatMapLatest allows us to assure that causal relationships in our programs work the way we expect them to
  // imagine trying to do this with promises!!
  var dataStream = selectedDatesStream.flatMapLatest(apiResponseStream)
  dataStream.log('API response received!')
  // render a graph to the DOM whenever data comes in
  myCoolGraph(document, dataStream)

  return
}

$(document).on('ready', setup)

