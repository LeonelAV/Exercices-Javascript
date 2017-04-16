/*findLongestWord()

Write a function findLongestWord()
 that takes an array of words and returns the length of the longest one.*/

function findLongestWord () {
  var length = arguments[0].length
  var longestWord = arguments[0]
  for(i = 1; i < arguments.length; i++) {
    if ( arguments[i].length > length) {
    	length = arguments[i].length
    	longestWord = arguments[i]
    }
    else {
    	length = arguments[0].length
    	longestWord = arguments[0]
    }
  }
  return 'The longest word is ' + longestWord + ' with ' + length + ' words.'
}
