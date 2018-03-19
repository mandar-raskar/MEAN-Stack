var events = require('events');
var emitter = new events.EventEmitter();

var uname = "sandeep";
var mobile = 1234567890;

emitter.on('addUser',function(user,no){
  console.log("User Name : " + uname);
  console.log("User Mobile no : " + no);
});

// add the user emit an event
emitter.emit('addUser',uname,mobile);
