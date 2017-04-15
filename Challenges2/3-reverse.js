/*reverse()

Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".*/

function reverse (text) {
  var textReverse = ''
  for (i = text.length-1; i>=0; i--) {
    textReverse += text[i]
  }
  return textReverse
}

//create a var to hold our new string
//run a for loop starting at the end of our text and finishing in the begging
//our for loop will take all the letters starting at the end and will put them one by one in the created var textReverse.
// when it arrives to the end we will have in our textreverse var, our input in reverse.
//every argument in a function is treated by JS as an array because of that we can run a foor loop in it

