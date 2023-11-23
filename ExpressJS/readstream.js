const fs = require('fs')

const readStream = fs.createReadStream('sample.txt')

readStream.on('readable', ()=>{
    let chunk;
    // readStream.read(10) -> 10 is size of chunk
    while(null != (chunk = readStream.read(10))){
        console.log("Chunk: ", chunk + "*****")
    }
})

console.log("execution completed")