var methods = require('./print_parameteres');
var getHTML = methods.getHTML;


var requestOptions = {
 host: 'sytantris.github.io',
 path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

 console.log(html.toLowerCase());

}

getHTML(requestOptions, printUpperCase);