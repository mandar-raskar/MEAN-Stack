var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('addData',function(){
  console.log('add data event fired ..... !!!! ');
});

// add the user emt an events
// if we comment below line --- event will not invoke
emitter.emit('addData');
