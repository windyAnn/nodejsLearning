/*var http = require("http");

http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World aa");

  response.end();
}).listen(8888);

//document.write("aa");
var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");

*/
var http = require("http");
var url = require("url");

console.log("Server  begin.");
function start(route) {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	//route(pathname);

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World AAAAAAA");
	response.end();
  }

  console.log("Server has start begin.");
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
start();
