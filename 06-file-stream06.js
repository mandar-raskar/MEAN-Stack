// file reading
var fs = require('fs');
//var path = __dirname + '/info.txt';
var path = 'info11.txt';
fs.readFile(path,'utf8',function(err,data){
  if(err){
    console.error('read error: - ' + err.message);
  }
  else {
    console.log(data);
  }
});
