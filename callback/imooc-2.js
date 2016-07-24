var http = require('http');
var promise = require('../promise/node_modules/bluebird/js/browser/bluebird');
var cheerio = require('cheerio');
//console.log(promise);  没问题
var baseUrl = 'http://www.imooc.com/view/';
//console.log(cheerio);
var url = 'http://www.imooc.com/learn/348';
var videoIds = [348, 637];
//目的是什么，爬出每个页面的一些内容
function getPageAsync(url) {
  return new Promise(function (resolve, reject) {
	console.log('正在爬取' + url);
	http.get(url, function (res) {
	  var html = '';
	  res.on('data', function (data) {   //把所有的html加载进来
		html += data;
	  });
	  res.on('end', function () {
		//如果成功了   就将html传递出去
		resolve(html);

		//var courseData = filterChapters(html);   //on('end'结束的时候输出结果
		//console.log(html);
		//printCourseInfo(courseData);
	  })
	}).on('error', function (e) {
	  reject(e);
	  console.log('获取出错');
	});
  })
}
var fetchCourseArray = [];
videoIds.forEach(function (id) {
  fetchCourseArray.push(getPageAsync(baseUrl + id));
});

Promise.all(fetchCourseArray).then(function (pages) {
  var coursesData = [];
  console.log("Promise.all", pages.length);
  pages.forEach(function (html) {
	var courses = filterChapters(html);
	coursesData.push(courses);
  });

  coursesData.sort(function (a, b) {
	return a.number < b.number;
  });
  printCourseInfo(coursesData);
});
function printCourseInfo(coursesData) {
  coursesData.forEach(function (courseData) {
	console.log(courseData.number + '人学过 ' + courseData.title + '\n');
  });
  coursesData.forEach(function (courseData) {//数组的遍历
	console.log('###' + courseData.title + '\n', courseData.videos.length);
	//courseData.videos.each(function (item) {
	for (var i = 0; i < courseData.videos.length; i++) {
	  var item = courseData.videos[i];
	  var chapterTitle = item.chapterTitle;
	  console.log(chapterTitle + '\n');
	  item.videos.forEach(function (video) {

		console.log(' 【' + video.id + '】' + video.videoTitle + '\n');
	  });
	}
	//console.log(item);
  })

}

function filterChapters(html) {
  var $ = cheerio.load(html);
  var chapters = $('.chapter');
  var title = $('.hd h2').text();
  var number = $('.meta-value strong').text();

  var courseData = {
	title: title,
	number: number,
	videos: []
  };
  chapters.each(function (item) {
	var chapter = $(this);
	var chapterTitle = chapter.find('strong').text();//拿到文本

	var videos = chapter.find('.video').children('li');

	var chapterData = {
	  chapterTitle: chapterTitle,
	  videos: []
	};

	videos.each(function (item) {      //each遍历的是集合
	  var video = $(this).find('.studyvideo');
	  var videoTitle = video.text();
	  var id = video.attr('href').split('video/')[1];
	  chapterData.videos.push({
		videoTitle: videoTitle,
		id: id
	  });
	});
	//console.log(chapterData);

	courseData.videos.push(chapterData);
//	console.log(courseData);

  });
  return courseData;
}
