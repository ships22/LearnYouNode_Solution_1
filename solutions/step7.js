//7th step ---

   var http = require('http');
var urlIneed = process.argv[2];

http.get( urlIneed, function(response) {
    response.setEncoding("utf8");
    response.on('error', function(err) {
        console.error(err);
    });
    response.on('data', function(dataChunk) {
        console.log(dataChunk);
    });
});