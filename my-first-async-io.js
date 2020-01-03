/* MY FIRST ASYNC I/O! (Exercise 4 of 13)   

Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
  
*/

const fs = require("fs");

function asyncFileRead() {
  fs.readFile(process.argv[2], (err, fileContents) => {
    if (err) {
      return console.error(err);
    }

    let content = fileContents.toString().split("\n").length - 1;
    console.log(content);
  });
}

asyncFileRead();
