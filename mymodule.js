/* MAKE IT MODULAR (Exercise 6 of 13)   

  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. The first argument is the  
  directory name and the second argument is the extension filter. Print the  
  list of files (one file per line) to the console. You must use  
  asynchronous I/O.  
  
*/

const fs = require("fs");

const fileFilter = (path, filter, callback) => {
  fs.readdir(path, (err, data) => {
    if (err) {
      return callback(err);
    }

    let filtered = data.filter(
      // again path.extname(file) would be useful here
      file => file.includes(filter) && file.length > 2
    );

    // this lines up with the err, data args in fileFilter. Null goes in as the "err" argument. filtered gets passed through as data.
    callback(null, filtered);
  });
};

module.exports = fileFilter;
