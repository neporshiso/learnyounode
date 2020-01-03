/* MAKE IT MODULAR (Exercise 6 of 13)   

  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. The first argument is the  
  directory name and the second argument is the extension filter. Print the  
  list of files (one file per line) to the console. You must use  
  asynchronous I/O.  
  
*/

const dir = process.argv[2];
const ext = process.argv[3];
const fileFilter = require("./mymodule.js");

// The last argument of fileFilter corresponds with the callback parameter in mymodule.js

fileFilter(dir, ext, (err, data) => {
  if (err) {
    return console.error(err);
  }

  data.forEach(val => {
    console.log(val);
  });
});
