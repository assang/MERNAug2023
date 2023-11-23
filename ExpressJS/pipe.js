var fs = require("fs");
 
// Create a readable stream
var readable = fs.createReadStream('sample.txt');
 
// Create a writable stream
var writable = fs.createWriteStream('output.txt');
 
// Calling pipe method
readable.pipe(writable);
 