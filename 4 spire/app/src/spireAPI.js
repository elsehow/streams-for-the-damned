var $ = require('jquery')
var Kefir = require('kefir')
//var access_token = '14724763f3541cb6c7bbac74f920836f502faa724406e4c6a5642e996366b31a'

var ajax = function (options) {
  return Kefir.stream(function(emitter) {
    var jqXHR = $.ajax(options);
    jqXHR.done(emitter.emit);
    jqXHR.fail(function(jqXHR, textStatus, errorThrown) {
      emitter.error(jqXHR.status === 0 ? 'Connection problem' : jqXHR.responseText);
    });
    return function() {
      jqXHR.abort();
    }
  }).take(1).endOnError().toProperty();
}


//returns a promise for a GET to the query string
var queryOpts = function (type, date) {
   //assemble query string
   var url = 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date=1985-05-01&end_date=1997-07-01&order=asc&column_index=4&collapse=quarterly&transformation=rdiff'
   //var url = 'https://app.spire.io//api/events/' + type 
   //    //+ '?date=' + date 
   //    + '&access_token=' + access_token
   return { url: url }
}

//returns a stream* from responses to query()'s AJAX request
var getData = function (date) {
  //easy interop with the promise api
  var opts = queryOpts('br', date)
  var responseStream = ajax(opts)
  return responseStream
}

module.exports = getData
