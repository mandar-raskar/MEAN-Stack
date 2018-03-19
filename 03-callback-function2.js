var fs = require('fs');
console.log('program started..........');
// function is not readFileSync() ---- readFile()
fs.readFile('info.txt',function(err,data){
  if(err)
    return console.error(err);
  console.log(data.toString());
});
console.log('program ended...............');
