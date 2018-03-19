var events = require('events');
var EventEmitter = events.EventEmitter;

var emitter = new EventEmitter();
emitter.on('myEvent',function(){
  console.log('Task - 1');
});
emitter.on('myEvent',function(){
  console.log('Task - 2');
});

emitter.emit('myEvent');

console.log(EventEmitter.listenerCount(emitter,'myEvent'));
