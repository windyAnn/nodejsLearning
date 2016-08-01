var fs = require('fs');
var readStream = fs.createReadStream('9.jpg');
var writeStream = fs.createWriteStream('9-stream.jpg');
readStream.on('data',function (chunk) {
  if (writeStream.write(chunk) === false) {
	console.log('still cached');
	readStream.pause();
  }
});
readStream.on('end',function () {
  writeStream.end();
});
writeStream.on('drain',function () {
  console.log('data drain');
	readStream.resume();
});
