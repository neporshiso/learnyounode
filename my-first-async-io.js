const fs = require('fs');

function asyncFileRead() {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        let content = fileContents.toString().split('\n').length - 1;
        console.log(content);
    })
}

asyncFileRead()