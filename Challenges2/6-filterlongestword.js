/*filterLongWords()

Write a function filterLongWords() that takes an array of words and an
integer i and returns the array of words that are longer than i. */

var words = ['Barcelona', 'Lisbon', 'Madrid', 'London', 7]

function filterLongWords () {
  var intenger
  for (i = 0; i < words.length; i++) {
    if (typeof words[i] === 'number') {
      intenger = words[i]
    }
  }

  function biggestThan (word) {
    if (word.length > intenger) {
      return true
    } else {
      return false
    }
  }
  return words.filter(biggestThan)
}

filterLongWords()