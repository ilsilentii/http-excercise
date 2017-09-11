var Mymethods = require('./print_parameters')
var getHTML = Mymethods.getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  console.log(html.toLowerCase());

}

getHTML(requestOptions, printLowerCase);