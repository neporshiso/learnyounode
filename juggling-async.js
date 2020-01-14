/* Juggling Async (Exercise 9 of 13)

This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
  
*/

const http = require("http");
const concat = require("concat-stream");
const urls = process.argv.slice(2);
const ans = [];
let count = urls.length;

urls.forEach((url, index) => {
  http.get(url, response => {
    response.setEncoding("utf8");
    response.pipe(
      concat(data => {
        ans[index] = data;
        count--;
        
        // Once all the data is received and placed into ans, we then send to stdout
        if (count == 0) {
          ans.forEach(res => console.log(res));
        }
      })
    );
  });
});
