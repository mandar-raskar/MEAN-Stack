// fs - file system
var fs = require('fs');
console.log('program started');
var data = fs.readFileSync('info.txt');     // by default this function is Async
console.log(data.toString());
console.log('program ended');
