var http = require('http');

var server = http.createServer(function(req,res){
      res.writeHead(200,{"Content-Type":"text/plain"});
      res.end("welcome to Node.js server ....... !!!!");
});

server.listen(3000,function(){
  console.log('server started.....');
});
