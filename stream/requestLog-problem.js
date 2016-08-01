var http = require('http');
var fs = require('fs');
var request = require('request');
http.createServer(function (req,res) {
  /* fs.readFile('9.jpg',function (err, data) {
   if (err){
   res.end('file not exist');
   }else {
   res.writeHead(200, {'Context-Type': 'text/html'});
   res.end(data);
   }
   })*/
  //fs.createReadStream('9.jpg').pipe(res)
  // request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
  request('http://s11.sinaimg.cn/middle/0041w004ty6GuYCoqmu7a&690').pipe(res);
  //request('9.jpg').pipe(res);
}).listen(8003);