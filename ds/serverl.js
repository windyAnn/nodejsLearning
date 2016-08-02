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
var proInfos =[];

function copyFile(file) {
	//get filename
	var filename = file.originalFilename || path.basename(file.path);   //path.basename(file.path)返回路径的最后一部分
	//copy file to a public directory
	console.log(path.basename(file.path));
	var filePath = 'uploadimg/' + filename;
	var targetPath = path.dirname(__filename)+ '/web/' + filePath;
	console.log(path.dirname(__filename));
	//copy file

	console.log(file.path);
	fs.createReadStream(file.path).pipe(fs.createWriteStream(targetPath));//从临时路径中读取后  copy
	return filePath;
}

app.post('/upload', multipartMiddleware, function(req, res, next) {

	console.log("-----files:", req.files);
	var filePath = copyFile(req.files.file);
	var info = {
		Img:filePath,
		Discription: req.body.proInfo,
		Price: req.body.phonePrice
	};
	proInfos.push(info);
	
	res.send({
		data: info
	}).end();
});
app.get('/upload', multipartMiddleware, function(req, res, next) {
	res.send({
		data: proInfos
	});
});



app.listen(3005);