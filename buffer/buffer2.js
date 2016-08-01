var fs = require('fs');
fs.readFile('logo.png' ,function (err, origin_buffer) {  //读取文档或图片，如果改成utf-8就会出错    图片的编码都是base64吗
  console.log(Buffer.isBuffer(origin_buffer),origin_buffer);
  fs.writeFile('logo_b.png',origin_buffer,function (err) {//writeFile复制一个图片
	if (err)console.log(err);
  });
  
 // var base64Image = new Buffer(origin_buffer).toString('base64');
  var base64Image = origin_buffer.toString('base64');

  console.log(base64Image);
  var decodeImage = new Buffer(base64Image,'base64');
  console.log(origin_buffer.compare(decodeImage));
  fs.writeFile('logo_deco.png', decodeImage, function (err) {
	if (err){
	  console.log(err);
	}
  })
});