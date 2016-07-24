var https = require('https');
var fs = require('fs');
var options = {
  key : fs.readFileSync('ssh_key.pem'),   //目的是什么
  cart : fs.readFileSync('ssh_cert.pem')
};
https
	.createServer(options,function (req,res) {
	  res.writeHead(200);
	  res.end('hello world')
	}).listen(8090);