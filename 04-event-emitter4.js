var events = require('events');
var emitter = new events.EventEmitter();

var uname = "sandeep";
var mobile = 1234567890;

// function changed here
emitter.once('addUser',function(user,no){
  console.log("User Name : " + uname);
  console.log("User Mobile no : " + no);
});

// add the user emit an event
emitter.emit('addUser',uname,mobile);

uname = "rohit";
mobile = 2345623456;
emitter.emit('addUser',uname,mobile);
