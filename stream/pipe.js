/*var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

//rs.pipe(process.stdout);
console.log(process.stdout);
*/
/*
var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
  rs.push(String.fromCharCode(c++));
  //console.log(String.fromCharCode(c++));
//  var what = 'z'.charCodeAt(0);
 // console.log(what);
  if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);

*/
/*
var Readable = require('stream').Readable;
var rs = Readable();
var c = 97 - 1;
rs._read = function () {
  if (c >= 'z'.charCodeAt(0)) return rs.push(null);
  setTimeout(function () {
	rs.push(String.fromCharCode(++c));
  }, 100);
};
rs.pipe(process.stdout);
process.on('exit', function () {
  console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);
*/
/*process.stdin.on('readable', function () {
  var buf = process.stdin.read();    //没有内容
  console.dir(buf);
});
  */
/*process.stdin.on('readable', function () {
  var buf = process.stdin.read(3);
  console.dir(buf);
  process.stdin.read(0);
});*/
/*var offset = 0;

process.stdin.on('readable', function () {
  var buf = process.stdin.read();
  if (!buf) return;
  for (; offset < buf.length; offset++) {
	if (buf[offset] === 0x0a) {
	  console.dir(buf.slice(0, offset).toString());
	  buf = buf.slice(offset + 1);
	  offset = 0;
	  process.stdin.unshift(buf);
	  return;
	}
  }
  process.stdin.unshift(buf);
});
  */

/*var Stream = require('stream');
var stream = new Stream;
stream.readable = true;
var c = 64;
var iv = setInterval(function () {
  if (++c >= 75) {
	clearInterval(iv);
	stream.emit('end');
  }
  else stream.emit('data', String.fromCharCode(c));
}, 100);

stream.pipe(process.stdout);
  */
var  buf = new Buffer('aaa');
process.stdin.on('data', function (buf) {
  console.log(buf);
});
process.stdin.on('end', function () {
  console.log('__END__');
});