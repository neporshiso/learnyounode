let dir = process.argv[2]
let ext = process.argv[3]
let fileFilter = require('./mymodule.js');

fileFilter(dir, ext, function(err, data) {
    if (err) {
        return console.log(err);
    } 
    
    data.forEach(function(val) {
        console.log(val);
    })
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