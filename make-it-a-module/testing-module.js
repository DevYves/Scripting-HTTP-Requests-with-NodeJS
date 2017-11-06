var getHTML = require('./make-it-a-module.js');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};



getHTML(requestOptions, function printHTML (html) {
  console.log(html);
});


