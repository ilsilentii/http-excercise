exports.getHTML = function getHTML (options, callback) {


  var https = require('https');

  var process = function(response) {
  var buff

  response.on('data', function(chunk) {
    buff += chunk.toString();
  });
  response.on('end', function() {
    callback(buff);
  })
}


https.request(options, process).end();

}

exports.printHTML = function printHTML (html) {

  console.log(html);
}

