const fs = require('fs'); 
let path = process.argv[2];
let ext = `.${process.argv[3]}`;

module.exports = function fileFilter(path, filter, callback) {
    fs.readdir(path, function (err, data) {
        if (err) {
            return callback(err)
        }

       data = (function(data) {
            if (data.includes(filter)) {
            return data
            }
        }

        callback(null, data)

    })
}

// 'use strict'
//     const fs = require('fs')
//     const path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }
