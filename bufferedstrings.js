function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');

  var callback = function(response) {
  var buff

  response.on('data', function(chunk) {
    buff += chunk.toString();
  });
  response.on('end', function() {
    console.log(buff)
  })
}

https.request(requestOptions, callback).end();

}

getAndPrintHTML();