/*第一步：起一个服务器*/
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();



/*第一步：起一个服务器*/
app.use(express.static("./web"));
app.get('/indexl', function(req, res){
	res.sendfile('./web/indexl.html');    //发送文件sendfile(路径)
});

//解析body
var bodyParser = require('body-parser');
app.use( bodyParser.json());                             //解析json
app.use(bodyParser.urlencoded({ extended: true }));  //转编码
//app.use(bodyParser({uploadDir:'./uploads'}));
var num = 0;
app.post('/shopInCart',function (req,res) {
	num = req.body.shopInNum;
	console.log(num);
	res.status(200).end();
});
app.get('/shopInCart',function (req, res) {
	res.send({
		shopInNum: num
	});
});

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var src = null;
var proInfo = null;

function copyFile(file) {
	//get filename
	var filename = file.originalFilename || path.basename(file.path);;
	//copy file to a public directory
	var targetPath = path.dirname(__filename)+ '/web/uploadimg/' + filename;
	//copy file
	fs.createReadStream(file.path).pipe(fs.createWriteStream(targetPath));
}

app.post('/upload', multipartMiddleware, function(req, res, next) {
	console.log("------body", req.body);
	console.log("-----files:", req.files);
	copyFile(req.files.file);
	proInfo = req.body.proInfo;
	res.status(200).end();
});
app.get('/upload', multipartMiddleware, function(req, res, next) {
	res.send({
		file : "./uploadimg/",
		proInfo: proInfo

	});
});



app.listen(3005);