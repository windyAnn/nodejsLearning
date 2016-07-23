

var oClass = require("./class");
exports.add = function (oClasses) {
  oClasses.forEach(function (item, index) {
	var _oClass = item;
	var teacherName = item.teacherName;
	var students = item.students;
	oClass.add(teacherName, students);
  })
}

