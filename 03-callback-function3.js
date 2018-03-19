// callback - hell problem.
var fs = require('fs');
var file = 'info.txt';

fs.exists(file,function(exists){
  if(exists){                           // checking file exist or not
    fs.stat(file,function(err,stat){
      if(err)                           // checking file is readable format or not
        throw err;
      if(stat.isFile()){                // is file in readable format
        fs.readFile(file,'utf8',function(err, data){
          if(err)                       // while reading if error appear
            throw err;
          console.log(data);
        });
      }
    });
  }
});
