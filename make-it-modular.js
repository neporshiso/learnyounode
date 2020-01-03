/* MAKE IT MODULAR (Exercise 6 of 13)   

  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. The first argument is the  
  directory name and the second argument is the extension filter. Print the  
  list of files (one file per line) to the console. You must use  
  asynchronous I/O.  
  
*/

let dir = process.argv[2];
let ext = process.argv[3];
let fileFilter = require("./mymodule.js");

fileFilter(dir, ext, (err, data) => {
  if (err) {
    return console.error(err);
  }

  data.forEach(val => {
    console.log(val);
  });
});

// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
