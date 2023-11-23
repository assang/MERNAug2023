const stream = require('stream')

const writable = new stream.Writable({
    write: function(chunk, encoding, next) {
        console.log("Chunk: ", chunk.toString())
        next()
    }
})

writable.write("Some text here")
writable.write("Some text here q1")
writable.end("End of stream")

writable.on('finish', function(){
    console.log("Write complete")
})