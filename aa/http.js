var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request,response) {
  fs.readFile('aa.html', 'utf-8', function (err,data) {
	response.end(data);
  })

});
server.listen(800);