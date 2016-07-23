
var fs = require('fs');
console.log('read 异步读取');
fs.readFile('../callback/sum.js','utf-8',function (err, data) { //方法2   异步  无阻塞
  if (err){
	console.log(err);
  }else {
	//console.log(data.toString());//方法1  异步
	console.log('read 异步读取完毕');
  }
});
console.log('read 同步读取');
var data = fs.readFileSync('main.js', 'utf-8');  //方法3   同步
console.log(data);