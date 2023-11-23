var events = require('events'); //

var em = new events.EventEmitter(); // em init

em.on('onsuccess', () => {
    console.log("Event is successfully called...")
})

setTimeout(() => {
    em.emit('onsuccess')
}, 2000)
