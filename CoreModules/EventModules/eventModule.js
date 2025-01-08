const events=require('events');
const eventEmitter= new events.EventEmitter()
// To create an Event
eventEmitter.on("print",()=>{
    console.log("This is print event");
    
})
eventEmitter.addListener("msg",()=>{
    console.log("The Message Event");
    
})
// To invoke the event
eventEmitter.emit("print");
eventEmitter.emit("msg")
// To Delete an event
eventEmitter.removeAllListeners("print")
eventEmitter.emit("print")