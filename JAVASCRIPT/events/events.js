const log = console.log
let events = require('events')

//log(events)

let add= function(a,b){ //add is an event handler(of addition event)
    log('the addition is executed')
    }
let eventEmitter = new events.EventEmitter(); //creating eventEmitter object

eventEmitter.on('Addition',add) //addition event assigned.name of event is 'addition'
eventEmitter.emit('Addition') //fire addition event