const log=console.log
let events = require('events')

listener1=()=>{log('listener-1 is executed')}
listener2=()=>{log('listener-2 is executed')}

let eventEmitter = new events.EventEmitter()


eventEmitter.on('connection',listener1)
eventEmitter.addListener('connection',listener1) //instead of .on you can use addlistener
eventEmitter.on('connection',listener2)

eventEmitter.emit('connection')

log('now listener 1 is removed')

eventEmitter.removeListener('connection',listener1)
eventEmitter.emit('connection')