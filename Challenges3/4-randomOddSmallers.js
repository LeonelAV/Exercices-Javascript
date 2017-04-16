/*randomOddSmallers()

Randomizes a number (range 0..100), then prints all the 
odd numbers from 40 to that one.If the number was smaller than 40,
 print all the numbers down to the randomized one (i.e. if the result 
 	was 37, you should print: 40, 39, 38, 37) */


function randomOddSmaller () {
  var randomN = Math.floor(Math.random() * 101)
  var sNum = []
  if (randomN > 40) {
    for (var i = 40; i <= randomN; i++) {
      if (i % 2 !== 0) sNum.push(i)
      }
  } else {
    for (var i = 40; i >= randomN; i--) {
      sNum.push(i)
    }
  }
  return sNum.join(', ')
}

console.log(randomOddSmaller())