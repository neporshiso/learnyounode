// HTTP Collect (Exercise 8 of 13)

const http = require("http");
const concat = require("concat-stream");

const url = process.argv[2];

http
  .get(url, response => {
    response.setEncoding("utf8");
    response.pipe(concat(data => {
        console.log(data.length)
        console.log(data.toString())
    }));
    response.on("error", console.error);
  })
  .on("error", console.error);
