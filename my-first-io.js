/* MY FIRST I/O! (Exercise 3 of 13)  

  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
  
*/

const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let bufferString = buffer.toString();
let newLines = bufferString.split('\n');

console.log(newLines.length - 1);