/*randomEven()

Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.*/

function randomEven () {
  var randomNumber = Math.floor(Math.random() * 101)
  for (var i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
randomEven()

// with this solution we get all even numbers until the randomNumber in the console.
// i tried with the push() method to put them all into an array an show them in an array. 
// i pretend to put the push method in line 10 but doesn't work 