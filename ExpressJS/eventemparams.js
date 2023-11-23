const events = require('events')

const em = new events.EventEmitter()

em.on('add', (...args) => {
    console.log("Add transaction is completed with id: ", ...args)
})

em.emit('add', 101, 102, 103)