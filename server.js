var http = require('http');
http.createServer(function (err, res) {
    res.write('Hello world');
    res.end();
}).listen(8080);