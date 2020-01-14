/* HTTP COLLECT (Exercise 8 of 13)   

  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
  
*/

const http = require("http");
const concat = require("concat-stream");

const url = process.argv[2];

http
  .get(url, response => {
    response.setEncoding("utf8");
    response.pipe(
      concat(data => {
        console.log(data.length);
        console.log(data);
      })
    );
    response.on("error", console.error);
  })
  .on("error", console.error);
