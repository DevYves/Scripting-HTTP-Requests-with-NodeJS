var https = require('https');


function getHTML (options, callback) {

  https.get(options, function (response) {
  response.setEncoding('utf8');
  var responseData = "";
    var responseData = "";
    response.on('data', function(data) {
      responseData += data;
      callback(responseData);
    });
  });
};

// function printHTML (html) {
//   console.log(html);
// };


// getHTML(requestOptions, printHTML);

module.exports = getHTML;