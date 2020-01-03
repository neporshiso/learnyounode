/* HTTP JSON API SERVER (Exercise 13 of 13) 

  Write an HTTP server that serves JSON data when it receives a GET request  
  to the path '/api/parsetime'. Expect the request to contain a query string  
  with a key 'iso' and an ISO-format time as the value.  
   
  For example:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  The JSON response should contain only 'hour', 'minute' and 'second'  
  properties. For example:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Add second endpoint for the path '/api/unixtime' which accepts the same  
  query string but returns UNIX epoch time in milliseconds (the number of  
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
  For example:  
   
     { "unixtime": 1376136615474 }  
   
  Your server should listen on the port provided by the first argument to  
  your program.  

*/
const http = require("http");
const url = require("url");
const moment = require("moment");

const PORT = process.argv[2];

const server = http
  .createServer((req, res) => {
    if (req.method !== "GET") {
      res.writeHead(500);
    }

    let urlParts = url.parse(req.url);
    let route = urlParts.pathname;
    let date = urlParts.query.substring(4);

    if (route === "/api/parsetime") {
      let payload = {
        hour: Number(moment(date).format("HH")),
        minute: Number(moment(date).format("m")),
        second: Number(moment(date).format("ss"))
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(payload));
    }

    if (route === "/api/unixtime") {
      console.log('unix time query', urlParts.query)
      let payload = {
        unixtime: Number(moment(date).format('x'))
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(payload));
    }
  })
  .listen(PORT);
