// Create a program that prints a list of files in a given directory, filtered by the extension of the files. 

const fs = require('fs'); 

let path = process.argv[2];
let ext = `.${process.argv[3]}`;

function fileFilter(path, ext) {
    fs.readdir(path, function(err, content) {
        content.forEach(function(el){
            if (el.includes(ext)){
                console.log(el)
            };
        });
    })
}

fileFilter(path, ext);