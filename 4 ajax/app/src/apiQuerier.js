var $ = require('jquery')
var Kefir = require('kefir')
//var access_token = '14724763f3541cb6c7bbac74f920836f502faa724406e4c6a5642e996366b31a'

var ajax = function (options) {
  return Kefir.stream(function(emitter) {
    var promise = $.ajax(options);
    promise.done(emitter.emit);
    promise.fail(function(jqXHR, textStatus, errorThrown) {
      emitter.error(jqXHR.status === 0 ? 'Connection problem' : jqXHR.responseText);
    });
    return function() {
      promise.abort();
    }
  }).take(1).endOnError().toProperty();
}


// returns options for $.ajax
var queryOpts = function (date) {
   return { 
    url: 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date=1985-05-01&end_date=1997-07-01&order=asc&column_index=4&collapse=quarterly&transformation=rdiff' 
  }
}

//returns a stream* from responses to query()'s AJAX request
var getData = function (date) {
  var opts = queryOpts(date)
  var responseStream = ajax(opts)
  return responseStream
}

module.exports = getData