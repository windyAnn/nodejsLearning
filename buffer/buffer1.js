
var buffer= new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]) ;
var dup = new Buffer(buffer.length) ;
buffer.copy(dup) ;
dup[0] = 0x48 ;
console.log(buffer) ;  // <Buffer 68 65 6c 6c 6f>
console.log(dup) ;  // <Buffer 48 65 65 6c 6f>