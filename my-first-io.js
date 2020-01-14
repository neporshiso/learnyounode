/* MY FIRST I/O! (Exercise 3 of 13)  

  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
  
*/

const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let lines = buffer.toString().split('\n').length - 1 

console.log(lines);