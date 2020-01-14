/* FILTERED LS (Exercise 5 of 13)  

Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
  
*/

const fs = require("fs");

let directory = process.argv[2];
let ext = `.${process.argv[3]}`;

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    // Opportune time to use path.extname()
    if (file.substring(file.length - 3) === ext) console.log(file);
  });
});