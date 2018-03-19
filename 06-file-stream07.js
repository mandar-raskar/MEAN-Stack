// writing data into file
var fs = require('fs');
var path = 'data.txt';
var data = "This my file creating by Node.js";

fs.writeFile(path,data,function(err){
  if(err){
    console.error("write error :- " + err.meassage);
  }else {
    console.log("Successfully write " + path);
  }
});
