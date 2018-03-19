// creating directory at runtime based on different OS
var path = require('path');
var directories = ['program','wed development','nodejs'];
var directory = directories.join(path.sep);

console.log(directory);
