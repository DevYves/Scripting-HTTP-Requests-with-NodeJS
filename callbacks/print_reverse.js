
var getHTML = require('./make-it-a-module');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
    console.log(html.split( '' ).reverse( ).join( '' ));

};


getHTML(requestOptions, printLowerCase);