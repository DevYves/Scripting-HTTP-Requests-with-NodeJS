module.exports = function getHTML (options, callback) {
   const https = require('https');

function getHTML (options, callback) {
  https.get(options, function (response) {
    var responseBodyString = "";
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (chunk) {
    responseBodyString += chunk;
    callback(responseBodyString);
    // (the `end` of the stream)
    });
    // response.on('end', function() {
    // });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML )

};