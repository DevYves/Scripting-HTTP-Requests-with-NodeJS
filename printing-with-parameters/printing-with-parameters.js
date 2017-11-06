



const https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


function getAndPrintHTMLChunks (options) {

https.get(options, function (response) {


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



});

}
getAndPrintHTMLChunks(requestOptions);