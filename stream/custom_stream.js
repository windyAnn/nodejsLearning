var stream = require('stream');
var util = require('util');
//读stream
function ReadStream() {
  stream.Readable.call(this);   //这个this指的ReadStream,因为后面new了一个ReadStream
 // console.log(this);
}
//util的继承
util.inherits(ReadStream,  stream.Readable);
//ReadStream这个对象有了stream.Readable这个函数功能？？？
console.log(ReadStream);
ReadStream.prototype._read = function () {
  this.push('I');
  this.push('love');
  this.push(null);
};
function WritStream() {
  stream.Writable.call(this);
  this._cached = new Buffer('');
}
util.inherits(WritStream,  stream.Writable);
WritStream.prototype._write =function (chunk, encode, cb) {
  console.log(chunk.toString());
  cb();
};
function TransformStream() {
  stream.Transform.call(this)
}
util.inherits(TransformStream,  stream.Transform);
TransformStream.prototype._transform = function (chunk, encode, cb) {
  console.log(chunk.toString());
  cb();
};
TransformStream.prototype._flush = function (cb) {
  this.push('oh yes');
};
var rs = new ReadStream();
var ws = new WritStream();
var ts = new TransformStream();
rs.pipe(ts).pipe(ws);