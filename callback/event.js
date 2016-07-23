/**
 * Created by shiyong on 7/21.
 */
var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11);
function water(who) {
  console.log('gei  ' + who + '1');

}
life.on('求安慰', water);
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '2');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '3');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '4');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '5');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '6');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '7');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '8');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '9');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '10');
});
life.on('求安慰',function (who) {
  console.log('gei  ' + who + '11');
});
life.on('求溺爱',function (who) {
  console.log('gei  ' + who + '12');
});
life.on('求溺爱',function (who) {
  console.log('gei  ' + who + '13');
});
life.removeListener('求安慰', water);
life.removeAllListeners('求安慰');
 //触发事件
//life.emit('求溺爱' , '妹子');
var hasConfortLis = life.emit('求安慰' , 'hanzi');
var hasLovedLis = life.emit('求溺爱' , '妹子');
var hasPlayL = life.emit('aa', 'bb');
/*console.log(hasConfortLis);
console.log(hasLovedLis);
console.log(hasPlayL);*/
console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求安慰'));