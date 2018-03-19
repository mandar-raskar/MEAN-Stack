var fs = require('fs');
var path = 'info11.txt';

fs.exists(path,function(exists){
  if(exists){
    console.log('"'+ path + '" file exist');
  }
  else {
    console.log("Doesn't exist");
  }
});
