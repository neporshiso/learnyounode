/* HTTP File Server (Exercise 11 of 13)

Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the second  
  command-line argument. You must use the fs.createReadStream() method to  
  stream the file contents to the response.  

*/

const fs = require('fs')
const http = require('http')
const file = process.argv[3]
const PORT = process.argv[2]

http.createServer((req, res) => {
  // This line opens the file as a readable stream
  const readStream = fs.createReadStream(file);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', () => {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', err => {
    res.end(err);
  });
}).listen(PORT);