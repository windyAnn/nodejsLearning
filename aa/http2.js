var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (request, response) {
  var urlObj = url.parse(request.url);
  console.log(urlObj);
  var pathname = urlObj.pathname;
  var query = urlObj.query;
  if (pathname === '/'){
	//pathname = '/aa.html';
	readFileResponse('/aa.html',response);
  }else if(pathname === '/ajax'){
	response.end('{"msg":"this is a json."}')
  }else {
	readFileResponse(pathname,response);
  }

//  response.end('url parse');
}).listen(802);
function readFileResponse(pathname,response) {
  fs.readFile(pathname.substr(1),'utf-8',function (err,data) {
	if(err){
	  response.writeHead(404);
	  response.end('file not found');
	  console.log(err);
	}else {
	  response.end(data);
	}

  });
}