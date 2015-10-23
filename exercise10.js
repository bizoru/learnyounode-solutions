var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
   var current_datime = strftime('%Y-%m-%d %I:%M',new Date());
   socket.end(current_datime+"\n");
})
server.listen(process.argv[2]);
