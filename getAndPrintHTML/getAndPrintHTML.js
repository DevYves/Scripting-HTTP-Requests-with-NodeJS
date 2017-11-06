const https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
function getAndPrintHTMLChunks () {



  /* Add your code here */

}



// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {
var responseBodyString = "";
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (chunk) {

    responseBodyString += chunk;
      // (the `end` of the stream)

  });
  response.on('end', function() {
      console.log(responseBodyString);

  });

  // the callback is invoked when all of the data has been received


});