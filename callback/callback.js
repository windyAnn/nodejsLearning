/*function learn(something) {
  console.log(something);
}
function we(callback, something) {
  something += 'is cool';
  callback(something);
}
we(learn, 'node.js');
  */
var c = 0;
function printIt() {
  console.log(c)
}
function plus(callback) {
  setTimeout(function () {

	c += 1;
	callback();
  },1000);
}
plus(printIt);