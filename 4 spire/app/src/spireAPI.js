var $ = require('jquery')
var Kefir = require('kefir')
var accessToken = '14724763f3541cb6c7bbac74f920836f502faa724406e4c6a5642e996366b31a'

var ajax = function (options) {
  return Kefir.stream(function(emitter) {
    var promise = $.ajax(options);
    promise.done(emitter.emit);
    promise.fail(function(promise, textStatus, errorThrown) {
      emitter.error(promise.status === 0 ? 'Connection problem' : promise.responseText);
    });
    return function() {
      promise.abort();
    }
  }).take(1).endOnError().toProperty();
}


//returns a promise for a GET to the query string
var queryOpts = function (type, date) {
   var url = 'https://app.spire.io//api/events/br?date=2015-07-16&access_token=' + accessToken
   return { url: url }
}

//returns a stream* from responses to query()'s AJAX request
var getData = function (date) {
  var opts = queryOpts(date)
  var responseStream = ajax(opts)
  return responseStream
}

module.exports = getData
