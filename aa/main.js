var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  console.log(request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === "/html") {
	response.write("html aaaaaa");
  } else {
	response.write("Hello World");
  }
  response.end();
}

http.createServer(onRequest).listen(8080);

console.log("Server has started.");

