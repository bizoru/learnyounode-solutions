var http = require('http')
var fs = require('fs');

var server = http.createServer(function (req, res) {
    //  res.writeHead(200, { 'content-type': 'text/plain' }) Works with and without this
    fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(process.argv[2])
