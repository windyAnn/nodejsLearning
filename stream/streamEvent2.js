var fs = require('fs');
var readStream = fs.createReadStream('9.jpg');
var n = 0;
readStream.on('data',function (chunk) {
  n++;
  console.log('data emits');
  console.log(Buffer.isBuffer(chunk));
  //console.log(chunk.toString('utf8'));
  readStream.pause();
  console.log('data pause');

  setTimeout(function () {
	console.log('data pause end');
	readStream.resume();
  },10)
})
  .on('readable',function () {   //pause和resume
	console.log('data readable');
  })
  .on('end',function () {
	console.log(n);
	console.log('data end');
  })
  .on('close',function () {
	console.log('data close');
  })
  .on('error',function (e) {
	console.log('data read error' + e);
  });