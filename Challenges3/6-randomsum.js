/*randomSum()

Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14 */


function randomSum () {
  var randomN = Math.floor(Math.random()*1001).toString().split('')
  var sum = randomN.reduce(operation);
  function operation (previousvalue, currentvalue) {
    return parseInt(previousvalue) + parseInt(currentvalue)
  }
  return sum
}

// the function operation, which is a callback function of the reduce(), has in this case
// two parameters. the previousvalue result in a number that is coming from the execution 
//of the funtion so will not exist the first time the funtion reduce will run

/* NOTE: without the parseInt the function reduce() will not run. because it only works
for numbers, and before we use the parseInt our numbers here holded in an array 
because of .toString().split('') */
