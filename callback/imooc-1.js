/**
 * Created by shiyong on 7/21.
 */
var http = require('http');
var cheerio = require('cheerio');
//console.log(cheerio);
var url = 'http://www.imooc.com/learn/348';
http.get(url,function (res) {
  var html = '';
  res.on('data',function (data) {   //把所有的html加载进来
	html += data;
  });
  res.on('end',function () {
	var courseData = filterChapters(html);   //on('end'结束的时候输出结果
	//console.log(courseData);
	printCourseInfo(courseData);
  })
}).on('error',function () {
  console.log('获取出错');
});

function filterChapters(html) {
  var $ = cheerio.load(html);
  var chapters = $('.chapter');

  var courseData = [];
  chapters.each(function (item) {
	var chapter =$(this);
	var chapterTitle = chapter.find('strong').text();//拿到文本

	var videos =chapter.find('.video').children('li');

	var chapterData = {
	  chapterTitle : chapterTitle,
	  videos : []
	};

	videos.each(function (item) {      //each遍历的是集合
	  var video = $(this).find('.studyvideo');
	  var videoTitle = video.text();
	  var id = video.attr('href').split('video/')[1];
	  chapterData.videos.push({
		videoTitle : videoTitle,
		id : id
	  });
	});
	//console.log(chapterData);

	courseData.push(chapterData);
//	console.log(courseData);

  });
  return  courseData;
}
function printCourseInfo(courseData) {
  courseData.forEach(function (item) {    //数组的遍历
	var chapterTitle = item.chapterTitle;
	console.log(chapterTitle + '\n');
	item.videos.forEach(function (video) {

	 console.log(' 【' + video.id + '】' + video.videoTitle + '\n');
	});
	//console.log(item);

  })

}