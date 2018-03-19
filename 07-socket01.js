var net = require('net');

var server = net.createServer(function(socket){
    socket.end('Socket running Successfully ..... !!!!!');
});

server.listen(3000,function(){
    console.log("server started .... !!!!");
});
