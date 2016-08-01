var Readable = require('stream').Readable;
var Writable = require('stream').Writable;
var readStream = new Readable();
var writeSteam = new Writable();
readStream.push('I');
readStream.push('love');
readStream.push(null);
writeSteam._write = function (chunk, encode, cb) {
  console.log(chunk.toString());
  cb();
};
readStream.pipe(writeSteam);