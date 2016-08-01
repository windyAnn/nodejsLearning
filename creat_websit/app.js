var express = require('express');
//var pug = require('pug');
var port = process.env.PORT || 3001;
var app = express();
app.set('views', './view');
app.set('view engine', 'jade');

console.log('start' + port);
//index page 路由
app.get('/', function (req,res) {
  res.render('index', {
	title : 'imooc 首页'
  })
});
app.get('/aa', function (req,res) {
  res.render('detail', {
	title : 'imooc 详情'
  })
});
app.get('/cc', function (req,res) {
  res.render('list', {
	title : 'imooc 列表'
  })
});
app.get('/bb', function (req,res) {
  res.render('admin', {
	title : 'imooc 后台'
  })
});
app.get('/ccc', function (req,res) {
  res.render('index', {
	title : 'imooc 首页'
  })
});

app.get('/user', function (req, res) {
  res.send({name: "anan",
  age: 20});
});

app.get('/world', function (req, res) {
  res.send('Hello World!');
});
app.get('/test', function (req, res) {
  res.sendfile('./test.html')
});
app.listen(port);