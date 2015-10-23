var fs = require('fs');
var bf = fs.readFileSync(process.argv[2]);
// fs.readFileSync(process.argv[2],'utf8') return a string
var lines = bf.toString().split('\n').length;
console.log(lines-1);
