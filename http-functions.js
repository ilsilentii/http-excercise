var Mymethods = require('./print_parameters')
var getHTML = Mymethods.getHTML;
var print = Mymethods.printHTML;


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


getHTML(requestOptions, print);