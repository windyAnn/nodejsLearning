/**
 * Created by shiyong on 7/21.

var globalVar = 'this is global var';
function globalFun() {
  var localVar = 'this is local var';
  console.log('visit global/local var');
  console.log(globalVar);
  console.log(localVar);
  function localF() {
	var innerLocalVar = 'this is inner local var';
	console.log(globalVar);
	console.log(localVar);
	console.log(innerLocalVar);
  }
  localF();
}
globalFun();
 */
function Pat(words) {
  this.words = words;
  this.speak =function () {
	console.log(this.words);
	console.log(this);
  }

}

var pat = new Pat('222');
pat.speak();
