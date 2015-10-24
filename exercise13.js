var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
   res.writeHead(200, { 'Content-Type': 'application/json' });

   requestobj = url.parse(req.url,true);

   //res.write(JSON.stringify(requestobj));

   if(requestobj.pathname == '/api/parsetime'){
       var iso = requestobj.query.iso;
       var t = new Date(iso);
       var result = { 'hour': t.getHours(),'minute': t.getMinutes(), 'second': t.getSeconds() }
       res.end(JSON.stringify(result));
   }

   if(requestobj.pathname == '/api/unixtime'){
       var iso = requestobj.query.iso;
       var t = new Date(iso);
       var result = {'unixtime': t.getTime()};
       res.end(JSON.stringify(result));
   }

   res.end('not matched route');


   //res.end(JSON.stringify(url.parse(req.url,true)));
});
server.listen(process.argv[2]);
