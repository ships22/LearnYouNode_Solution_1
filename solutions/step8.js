//8th step ---

var http = require('http');
var bl = require('bl');
var urlIneed = process.argv[2];

http.get( urlIneed, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) return console.log(error);
        url = data.toString();
        console.log(url.length);
        console.log(url);
    }));
});