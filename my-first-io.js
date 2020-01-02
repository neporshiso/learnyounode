const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let bufferString = buffer.toString();
let newLines = bufferString.split('\n');
// console.log(newLines);
console.log(newLines.length - 1);