var fs = require('fs');
fs.createReadStream('9.jpg').pipe(fs.createWriteStream('9-stream2.jpg'));