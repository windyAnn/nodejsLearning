var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("./web"));
app.get('/index', function (req, res) {

	res.render("index");
	//res.send('Hello World!');
});

app.get('/phonelist', function (req, res) {
	var pl = {
		data: [
			{
				name: "htc 8",
				imgPath: "images/ad.jpg",
				price: 2000
			},
			{
				name: "htc 4",
				imgPath: "images/ad.jpg",
				price: 200
			},
			{
				name: "htc 5",
				imgPath: "images/ad.jpg",
				price: 2033
			},
			{
				name: "htc 1",
				imgPath: "images/ad.jpg",
				price: 111
			},
			{
				name: "htc 0",
				imgPath: "images/ad.jpg",
				price: 2888
			}
		]
	};
	res.send(pl);
});
var num = 0;
app.post("/shopincart", function (req, res) {   
	console.log(req.body.shopInCartNum);
	num = req.body.shopInCartNum;
	res.status(200).end();
});
app.get("/shopincart",function (req,res) {
	res.send({
		shopInCartNum : num
	})
});

app.listen(3020, function () {
	console.log('Example app listening on port 3020!');
});