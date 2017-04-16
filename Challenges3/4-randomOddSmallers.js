/*randomOddSmallers()

Randomizes a number (range 0..100), then prints all the 
odd numbers from 40 to that one.If the number was smaller than 40,
 print all the numbers down to the randomized one (i.e. if the result 
 	was 37, you should print: 40, 39, 38, 37) */
  
function randomOddSmaller () {
  var randomN = Math.floor(Math.random() * 101)
  var numbers = []
  if (randomN > 40) {
    for (var i = 40; i <= randomN; i++) {
      if (i % 2 !== 0) numbers.push(i)
    }
  } else {
    for (var i = 40; i >= randomN; i--) {
      numbers.push(i)
    }
  }
  return numbers.join(', ')
}

console.log(randomOddSmaller())
