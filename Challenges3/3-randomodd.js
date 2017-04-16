/*randomOdd()

Randomizes a number (range 0..100), then prints all the odd numbers 
from 40 to that one. If the number was smaller than 40 nothing should be printed */

function randomOdd () {
  var randomN = Math.floor(Math.random() * 101)
  for (i = 0; i < randomN; i++) {
    if (randomN > 40 && randomN % 2 !== 0) {
      console.log(i)
    } else {
      console.log(randomN + ' = > This  number is smaller than 40 ')
    }
  }
}

randomOdd()

