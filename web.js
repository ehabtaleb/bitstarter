var express = require('express');
var fs = require('fs');
vatr fileName = 'index.html';

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
// This line opens the file as a readable stream
  var readStream = fs.createReadStream(filename);
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(response);
  });

});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
