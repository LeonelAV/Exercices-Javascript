/*randomSum()

Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14 */


function randomSum () {
  var randomN = Math.floor(Math.random()*1001).toString().split('')
  randomN.reduce(operation);
  function operation (total, num) {
  	return total + num
  }
  return randomN
}