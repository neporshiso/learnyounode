/* HTTP UPPERCASERER (Exercise 12 of 13)

Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  

*/

const http = require("http");
const map = require("through2-map");
const PORT = process.argv[2];
// req and res are streams and we can pipe them where we need them to go
http
  .createServer((req, res) => {
    if (req.method === "POST") {
      req.setEncoding("utf8");

      req
        .pipe(
          map(chunk => {
            return chunk.toString().toUpperCase();
          })
        )
        .pipe(res);
    }
  })
  .listen(PORT);
