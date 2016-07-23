/**
 * Created by shiyong on 7/21.

var pet = {
  words: '..',
  speak: function (say) {
	console.log(say +' '+ this.words);
	console.log(this);
  }
};
//pet.speak('speak');
var dog = {
  words: 'ww'
};
pet.speak.call(dog,'speak');
 */
function Pet(words) {
  this.words = words;
  this.speak = function () {
	console.log(this.words);
	console.log(this);
  }
}
function Dog(words) {
  Pet.call(this,words);
}
var dog = new Dog('ww');
dog.speak();


















